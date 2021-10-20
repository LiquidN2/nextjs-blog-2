import {createTransport} from 'nodemailer';

const HOST = process.env.MAILJET_SMTP_HOST;
const PORT = process.env.MAILJET_SMTP_PORT;
const USERNAME = process.env.MAILJET_SMTP_USERNAME;
const PASSWORD = process.env.MAILJET_SMTP_PASSWORD;

if (!HOST || !PORT || isNaN(+PORT) || !USERNAME || !PASSWORD)
  throw 'Invalid SMTP server configuration. Please check .env.local';

const sendEmail = async (text: string) => {
  try {
    const transporter = createTransport({
      host: HOST,
      port: +PORT,
      secure: false,
      auth: {
        user: USERNAME,
        pass: PASSWORD
      }
    });

    const info = await transporter.sendMail({
      from: 'webmaster@hnguyen.com.au',
      to: 'hhnguyen255@yahoo.com',
      subject: 'You have a new message',
      text,
      html: `<p>${text}</p>`
    });

    if (!info) throw 'Unable to send email';

    console.log(`Message sent ${info.messageId}`);

  } catch (err) {
    console.error(err);
    throw err;
  }
}

export default sendEmail;
