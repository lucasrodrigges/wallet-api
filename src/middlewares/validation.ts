import { type NextFunction, type Request, type Response } from 'express';
import Joi from 'joi';

export = (schema: Joi.Schema, isQuery = false) => (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const payload = isQuery ? req.query : req.body;
  const { error } = schema.validate(payload);

  if (error) res.status(422).json({ message: error.message });
  else next();
};
