import { type IUser } from '../interfaces/IUser';
import User from '../database/models/User';

export default class UserService {
  static async findAll() {
    const users = await User.findAll();
    return users;
  }

  static async create(payload: IUser) {
    const created = await User.create({ ...payload });
    console.log(created);
    return created;
  }
}
