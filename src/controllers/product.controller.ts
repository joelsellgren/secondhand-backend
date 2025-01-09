import { Request, Response } from 'express'
import Product from '../models/Product'

require('dotenv').config()

export const createProduct = async (req: Request, res: Response) => {
  try {
    const product = await Product.create({
      name: req.body.name,
      description: req.body.description,
      price: req.body.price,
      size: req.body.size,
      category: req.body.category,
      imageUrl: req.body.imageUrl,
    })

    console.log(product) // Log the new new product

    res.status(201).json()
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      message: err,
    })
  }
}
export const getAllProducts = async () => {}
export const getProduct = async () => {}
export const updateProduct = async () => {}
export const deleteProduct = async () => {}
