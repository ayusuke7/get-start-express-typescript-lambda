import { NextFunction, Request, Response } from "express";

export async function erroMiddleware(
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
) {
  if (err) {
    const timestamp = new Date().toISOString();
    const status = err.status || 500;
    const message = err.message || "unknown error";

    res.statusCode = status;
    return res.send({
      message,
      timestamp,
    });
  }

  return next();
}
