import {
  ErrorRequestHandler,
  NextFunction, Request, Response,
} from 'express';
import HTTPError from '../utils/HTTPError';

export = (
  error: HTTPError | ErrorRequestHandler,
  _req: Request,
  res: Response,
  _next: NextFunction,
) => {
  if (error instanceof HTTPError) {
    return res.status(error.statusCode).json({ message: error.message });
  }

  return res.status(500).json({ message: 'Something went wrong' });
};
