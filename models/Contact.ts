import * as mongoose from 'mongoose';

interface Contact extends mongoose.Document {
  email: string;
  name: string;
  message: string;
  createdAt: Date;
}

const contactSchema = new mongoose.Schema<Contact>({
  email: {
    type: String,
    required: true,
  },

  name: {
    type: String,
    required: true,
  },

  message: {
    type: String,
    required: true,
  },

  createdAt: Date,
});

contactSchema.pre('save', function (next) {
  this.createdAt = new Date();
  next();
});

export default mongoose.models.Contact ||
  mongoose.model<Contact>('Contact', contactSchema);
