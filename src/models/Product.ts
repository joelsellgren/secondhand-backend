import { Schema, model, Types } from 'mongoose'

export interface IProduct {
  name: string
  description: string
  price: number
  size: string
  category: string
  imageUrl: string
}

const productSchema = new Schema<IProduct>(
  {
    name: String,
    description: String,
    price: Number,
    size: String,
    category: [String],
    imageUrl: String,
  },
  {
    timestamps: true,
    strict: true,
  }
)

const Product = model('products', productSchema)

export default Product
