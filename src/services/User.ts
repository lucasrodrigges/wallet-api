import ILogin from '../interfaces/ILogin';
import { type IUser } from '../interfaces/IUser';
import User from '../models/User';
import { encryptPassword, verifyPassword } from '../utils/bcrypt';
import HTTPError from '../utils/HTTPError';
import { createToken } from '../utils/JWT';
import responseList from '../utils/responseList';

export default class UserService {
  static async login(payload: ILogin) {
    const foundUser = await User.login(payload);

    if (!foundUser) throw new HTTPError(404, responseList.NOT_FOUND);
    if (!await verifyPassword(payload.password, foundUser.password)) {
      throw new HTTPError(422, responseList.INVALID_VALUES);
    }

    const token = createToken({ userId: foundUser.id });

    return { token };
  }

  static async findAll() {
    const users = await User.findAll();

    if (!users.length) throw new HTTPError(404, responseList.NOT_FOUND);

    return users;
  }

  static async create(payload: IUser) {
    const hash = await encryptPassword(payload.password);
    const userExists = await User.findByEmail(payload.email);

    if (userExists) throw new HTTPError(422, 'User already exists.');
    const created = await User.create({ ...payload, password: hash });

    return { message: responseList.CREATED };
  }

  static async remove(userId: string) {
    const deleted = await User.remove(userId);

    return responseList.OK;
  }
}
