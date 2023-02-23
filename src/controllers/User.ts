import { type Request, type Response } from 'express';
import User from '../services/User';
import HTTPError from '../utils/HTTPError';
import mapStatus from '../utils/mapStatus';
import responseList from '../utils/responseList';

export default class UserController {
  static async login(req: Request, res: Response) {
    const { email, password } = req.body;

    try {
      const output = await User.login({ email, password });
      res.status(mapStatus(responseList.OK)).json(output);
    } catch (error: any) {
      res.status(error.statusCode).json({ message: error.message });
    }
  }

  static async findAll(_req: Request, res: Response) {
    try {
      const output = await User.findAll();
      res.status(200).json(output);
    } catch (error: any) {
      res.status(error.statusCode).json({ message: error.message });
    }
  }

  static async create(req: Request, res: Response) {
    const { body } = req;

    try {
      const output = await User.create(body);
      res.status(mapStatus(responseList.CREATED)).json(output);
    } catch (error: any) {
      res.status(error.statusCode).json({ message: error.message });
    }
  }

  static async remove(req: Request, res: Response) {
    const { userId } = req.params;

    try {
      const output = await User.remove(userId);

      res.status(mapStatus(responseList.DELETED)).end();
    } catch (error: any) {
      res.status(error.statusCode).json({ message: error.message });
    }
  }
}
