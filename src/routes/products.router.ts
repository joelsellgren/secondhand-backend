import { Router } from 'express'
import * as productsController from '../controllers/products.controller'

const productsRouter = Router()

productsRouter
  .route('/')
  .get(productsController.getAllProducts)
  .post(productsController.createProduct)
productsRouter
  .route('/:id')
  .get(productsController.getProduct)
  .patch(productsController.updateProduct)
  .delete(productsController.deleteProduct)

export default productsRouter
