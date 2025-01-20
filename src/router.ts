import { Router } from 'express'
import productsRouter from './routes/products.router'

const router = Router()

router.use('/products', productsRouter)

export default router
