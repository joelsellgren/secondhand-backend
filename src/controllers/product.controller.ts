import { Request, Response } from 'express'
import Product from '../models/Product'

require('dotenv').config()

export const createProduct = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const product = await Product.create({
      name: req.body.name,
      description: req.body.description,
      price: req.body.price,
      size: req.body.size,
      category: req.body.category,
      imageUrl: req.body.imageUrl,
    })

    console.log(product)
    res.status(201).json('created')
  } catch (err) {
    if (err instanceof Error) {
      res.status(400).json({
        status: 'fail',
        message: err.message,
      })
    } else {
      res.status(400).json({
        status: 'fail',
        message: 'An unknown error occurred',
      })
    }
  }
}
export const getAllProducts = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const products = await Product.find({})

    console.log(products)

    res.status(200).json({ status: 'success', data: products })
  } catch (err) {
    res.status(500).json({ status: 'fail', message: 'Internal server error' })
  }
}

export const getProduct = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const product = await Product.findById(req.params.id)

    if (!product) {
      res.status(404).json({
        status: 'fail',
        message: 'Product not found',
      })
    }

    res.status(200).json({ status: 'success', data: product })
  } catch (err) {
    res.status(500).json({
      status: 'fail',
      message: 'Internal server error',
    })
  }
}

export const updateProduct = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const product = await Product.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    })

    if (!product) {
      res.status(404).json({
        status: 'fail',
        message: 'Product not found',
      })
    }

    res.status(200).json({ status: 'success', data: product })
  } catch (err) {
    if (err instanceof Error) {
      res.status(400).json({
        status: 'fail',
        message: err.message,
      })
    } else {
      res.status(400).json({
        status: 'fail',
        message: 'An unknown error occurred',
      })
    }
  }
}

export const deleteProduct = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const product = await Product.findByIdAndDelete(req.params.id)

    if (!product) {
      res.status(404).json({
        status: 'fail',
        message: 'Product not found',
      })
    }

    res.status(204).json({ status: 'success', data: null })
  } catch (err) {
    res.status(500).json({
      status: 'fail',
      message: 'Internal server error',
    })
  }
}
