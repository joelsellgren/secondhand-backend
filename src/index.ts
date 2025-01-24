import express from 'express'
import cors from 'cors'
import router from './router'
import connectDb from './db/connect'
import rateLimit from 'express-rate-limit'

const app = express()
const limiter = rateLimit({
  max: 100,
  windowMs: 60 * 60 * 1000,
  message: 'Too many requests from this IP, please try again in one hour.',
})
connectDb()

app.use(
  cors({
    // If you want to restrict the origins, replace "*" with your origin
    origin: '*', // For development: "*" allows all origins. For production, specify your origins for security.
  })
)

app.use(express.json({ limit: '10kb' }))
app.get('/', (req, res) => {
  res.status(200).json('ping pong')
})

app.use(
  '/api',
  (req, res, next) => {
    next()
  },
  router,
  limiter
)

const { PORT = 5050 } = process.env
app.listen(PORT, () => {
  return console.log('Listening at port', PORT)
})
