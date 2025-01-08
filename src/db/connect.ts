import mongoose from 'mongoose'
require('dotenv').config()
const { MONGO_URI } = process.env

export default async function connectDb() {
  try {
    await mongoose.connect(MONGO_URI!)
  } catch (error) {
    process.exit(1)
  }
}
