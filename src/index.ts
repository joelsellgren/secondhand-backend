import express from 'express'
import cors from 'cors'
import router from './router'
import connectDb from './db/connect'

const app = express()
connectDb()

app.use(
  cors({
    // If you want to restrict the origins, replace "*" with your origin
    origin: '*', // For development: "*" allows all origins. For production, specify your origins for security.
  })
)

app.use(express.json())

app.get('/', (req, res) => {
  res.status(200).json('ping pong')
})

app.use(
  '/api',
  (req, res, next) => {
    next()
  },
  router
)

const { PORT = 5050 } = process.env
app.listen(PORT, () => {
  return console.log('Listening at port', PORT)
})
