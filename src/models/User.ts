import { Schema, model, Types } from 'mongoose'

export interface IUser {
  _id: Types.ObjectId
  name: string
  email: string
  password: string
}

const userSchema = new Schema<IUser>(
  {
    name: String,
    email: String,
    password: String,
  },
  {
    timestamps: true,
    strict: true,
  }
)

const Product = model('users', userSchema)

export default Product
