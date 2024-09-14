 import jwt from 'jsonwebtoken';
 import { errorHandle } from './error.js';

export const verifyToken=(req,res,next)=>{
   const token = req.cookies.access_token;
   // console.log("Token: ", token);
   // console.log(req.cookies.access_token);
 if (!token) return next(errorHandle(401, 'Unauthorized'));
 
 jwt.verify(token,process.env.JWT_SECRET,(err,user)=>{
    if (err) {
      console.error("JWT Verify Error: ", err);
      return next(errorHandle(403,'Forbidden'));

    }

    req.user=user;
    //console.log("Decoded User ID: ",req.user);
   //  console.log("Decoded User Object: ", req.user);

    next();
 });
};


