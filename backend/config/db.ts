import mongoose from 'mongoose';

const connectDB = async () => {
  try {
    // console.log('username', process.env.MONGO_PASS);
await mongoose.connect('mongodb+srv://ishaan:ishaan@healthapp.mynrer9.mongodb.net/');
    console.log('MongoDB Connected');
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

export default connectDB;
