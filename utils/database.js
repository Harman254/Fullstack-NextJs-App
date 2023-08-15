import mongoose from 'mongoose';

const connectToDB = async () => { 
  try {
    await mongoose.connect(process.env.MONGO)
    console.log('Connected to MongoDB') //tracking database connection
  } catch (error) {
    throw new Error('failed to connect to database')
  }
}

export default connectToDB;