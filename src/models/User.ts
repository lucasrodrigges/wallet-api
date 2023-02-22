import Knex from '../database/config';
import ILogin from '../interfaces/ILogin';
import { IUser } from '../interfaces/IUser';

export default class UserModel {
  static async findAll() {
    const users = await Knex
      .select('*')
      .from('Users')
      .whereNull('deletedAt');
    return users;
  }

  static async login({ email, password }: ILogin) {
    const user = await Knex
      .select('*')
      .from('Users')
      .where('email', email)
      .first();
    return user;
  }

  static async create(payload: IUser) {
    await Knex
      .insert(payload)
      .into('Users');
    return true;
  }

  static async remove(userId: string) {
    await Knex
      .update('deletedAt', new Date())
      .where('id', userId);
    return true;
  }
}
