import { type Request, type Response } from 'express';
import User from '../services/User';
import mapStatus from '../utils/mapStatus';
import responseList from '../utils/responseList';

export default class UserController {
  static async login(req: Request, res: Response) {
    const { email, password } = req.body;
    const output = await User.login({ email, password });
    res.status(mapStatus(responseList.OK)).json(output);
  }

  static async findAll(_req: Request, res: Response) {
    const output = await User.findAll();
    res.status(mapStatus(responseList.OK)).json(output);
  }

  static async create(req: Request, res: Response) {
    const { body } = req;
    const output = await User.create(body);
    res.status(mapStatus(responseList.CREATED)).json(output);
  }

  static async remove(req: Request, res: Response) {
    const { userId } = req.params;
    const output = await User.remove(userId);

    res.status(mapStatus(responseList.DELETED)).end();
  }
}
