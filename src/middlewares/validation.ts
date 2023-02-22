import { type NextFunction, type Request, type Response } from 'express';
import Joi from 'joi';
import HTTPError from '../utils/HTTPError';
import responseList from '../utils/responseList';

export = (schema: Joi.Schema, isQuery = false) => (
  req: Request,
  _res: Response,
  next: NextFunction,
) => {
  const payload = isQuery ? req.query : req.body;
  const { error } = schema.validate(payload);
  console.log('joi', error || 'validated');
  if (error) throw new HTTPError(422, error.message);

  next();
};
