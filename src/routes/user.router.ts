import { Router } from 'express'
import * as userController from '../controllers/user.controller'

const userRouter = Router()

userRouter.route('/').post(userController.createUser)
userRouter
  .route('/:id')
  .patch(userController.updateUser)
  .delete(userController.deleteUser)

export default userRouter
