import { NextFunction, Request, Response } from "express";
import { TokenPayload } from "../@types/express";
import { Security } from "../utils/security";

export const authMiddleware = (unless: string[] = []) => {
  return function (req: Request, res: Response, next: NextFunction) {
    console.log(req.path);

    if (unless.some((path) => path === req.path)) {
      return next();
    }

    const { authorization } = req.headers;

    if (!authorization) {
      return res.status(403).json({
        message: "não autorizado",
      });
    }

    const payload: TokenPayload = Security.verifyJWT(authorization!);
    if (!payload) {
      return res.status(403).json({
        message: "não autorizado",
      });
    }

    req.payload = payload;
    return next();
  };
};
