import { type Request, type Response } from 'express';
import User from '../services/User';

export default class UserController {
  static async findAll(_req: Request, res: Response) {
    const output = await User.findAll();
    res.status(200).json(output);
  }

  static async create(req: Request, res: Response) {
    const { body } = req;
    const output = await User.create(body);
    res.status(201).json(output);
  }
}
