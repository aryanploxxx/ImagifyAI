/* eslint-disable linebreak-style */
import mongoose from 'mongoose';

const connectDB = (url) => {
  // strictQuery is useful for search query
  mongoose.set('strictQuery', true);
  mongoose.connect(url)
    .then(() => console.log('Database Connected!'))
    .catch((err) => {
      console.error('Database Connection Failed!');
      console.error(err);
    });
};

export default connectDB;
