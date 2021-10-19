import mongoose from 'mongoose';
import AppError from '../utils/appError';

const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI)
  throw new Error(
    'Please define the MONGODB_URI environment variable inside .env.local'
  );

/**
 * Global is used here to maintain a cached connection across hot reloads
 * in development. This prevents connections growing exponentially
 * during API Route usage.
 */
let cached = global.mongoose;

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}

const dbConnect = async () => {
  try {
    if (cached.conn) return cached.conn;

    if (!cached.promise) {
      const options = {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        bufferCommands: false,
      };

      cached.promise = await mongoose.connect(MONGODB_URI, options);
    }
    cached.conn = await cached.promise;
    // console.log('Connected to DB');
    return cached.conn;
  } catch (err) {
    throw new AppError('Unable to connect to database.', 500);
    console.error(err);
  }
};

export default dbConnect;
