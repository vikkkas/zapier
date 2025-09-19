import { Request, Response, NextFunction } from "express";
import jwt from 'jsonwebtoken';
import { JWT_SECRET } from "./config";

export function authMiddleware(
  req: Request,
  res: Response,
  next: NextFunction
) {
    const token = req.headers.authorization;
    try{
        const payload = jwt.verify(token as string, JWT_SECRET);
        
    //@ts-ignore
    req.id = payload.id;
    next();
    }
    catch(e) {
        return res.status(401).json({error: "Unauthorized"});
    }
}
