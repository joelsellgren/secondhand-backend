import { Request, Response } from 'express'
import Product from '../models/Product'
import { log } from 'node:console'

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
      status: 'success',
      message: err,
    })
  }
}
export const getAllProducts = async (req: Request, res: Response) => {
  try {
    const products = Product.find({})

    console.log(products)

    res.status(200).json({ status: 'ok', data: products })
  } catch (error) {
    res.status(500).json({ status: 'fail', message: 'Internal server error' })
  }
}
export const getProduct = async (req: Request, res: Response) => {
  try {
    const product = Product.findById()
  } catch (error) {}
}
export const updateProduct = async (req: Request, res: Response) => {
  try {
  } catch (error) {}
}
export const deleteProduct = async (req: Request, res: Response) => {
  try {
  } catch (error) {}
}
