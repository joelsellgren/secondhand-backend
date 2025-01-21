// import User from '../models/userModel';
// import jwt from 'jsonwebtoken';
// import { Request, Response, NextFunction } from 'express'

// const signToken = (id: string) => {
//    return jwt.sign({ id }, `${process.env.JWT_SECRET_KEY}`, {
//       expiresIn: process.env.JWT_EXPIRES_IN,
//    });
// };

// // Returns for both a logged in user and for logging in a new registered user
// export const loggedInUserResponse = async (id: string) => {
//    const user = await User.findById(id);
//    const token = signToken(id.toString());

//    return {
//       status: 'success',
//       token,
//       data: { user },
//    };
// };

// export const logInUser = async (req: Request, res: Response) => {
//    try {
//       if (!req.body.email || !req.body.password)
//          throw new Error('Wrong email or password!');

//       const user = await User.findOne({ email: req.body.email }).select(
//          '+password'
//       );

//       if (
//          !user ||
//          !(await user!.comparePasswords(req.body.password, user!.password))
//       ) {
//          throw new Error('Wrong email or password!');
//       }

//       res.status(201).json(await loggedInUserResponse(user._id.toString()));
//    } catch (error: any) {
//       console.log(error);
//       res.status(401).json({
//          status: 'fail',
//          message: error.message,
//       });
//    }
// };

// export const authUser = async (req: Request, res: Response, next: NextFunction) => {
//    try {
//       console.log(req.headers.authorization);
//       const token = req.headers.authorization?.split(' ')[1];

//       if (!token) throw new Error('You have not logged in!');

//       /* 		interface JwtPayloadASDF extends jwt.JwtPayload {
// 			id: string;
// 		} */

//       const decodedToken: any = jwt.verify(token, process.env.JWT_SECRET_KEY!); // FIXME type for decodedToken

//       const user = await User.findById(decodedToken.id);

//       if (!user) throw new Error('This user is not valid.');

//       // TODO add check if user has changed password

//       // put token and user on req to pass on to setPrivilege
//       req.decodedToken = decodedToken;
//       req.user = user;
//       console.log(req.decodedToken);

//       next();
//    } catch (error: any) {
//       console.log(error);
//       res.status(401).json({
//          status: 'fail',
//          message: error.message,
//       });
//    }
// };
