import { NextFunction, Request, Response } from "express";

const notFoundMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  res.status(404).send({ error: "Not Found" });
};

export default notFoundMiddleware;
