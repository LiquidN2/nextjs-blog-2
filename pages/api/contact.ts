import type { NextApiRequest, NextApiResponse } from 'next';

import AppError from '../../utils/appError';
import { isValidEmail } from '../../utils/helpers';
import dbConnect from '../../db/dbConnect';
import Contact from '../../models/Contact';
import sendEmail from '../../utils/email';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    switch (req.method) {
      case 'POST':
        let { email, name, message } = req.body;
        email = email.trim();
        name = name.trim();
        message = message.trim();

        const invalidData = !isValidEmail(email) || !name || !message;
        if (invalidData) throw new AppError('Invalid input data', 422);

        // save to db
        await dbConnect();
        const newMessage = { email, name, message };
        const newDoc = new Contact(newMessage);
        await newDoc.save();

        // send email
        await sendEmail(message);

        res.status(201).json({
          status: 'success',
          message: newMessage,
        });
        break;

      default:
        throw new AppError('Request not allowed', 403);
    }
  } catch (err) {
    if (err instanceof AppError) {
      return res
        .status(err.statusCode)
        .json({ status: err.status, message: err.message });
    }
    res.status(500).json({ status: 'error', message: 'Something went wrong' });
  }
};

export default handler;
