import { Router } from 'express'
import * as productsController from '../controllers/products.controller'

const productsRouter = Router()

productsRouter
  .route('/')
  .get(productsController.getAllProducts)
  .post(productsController.createProduct)

export default productsRouter
