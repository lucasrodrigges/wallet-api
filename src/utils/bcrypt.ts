import bcrypt from 'bcrypt';
import { Hash } from 'crypto';

export const encryptPassword = async (password: string, saltRounds = 10) => {
  const pass = await bcrypt.hash(password, saltRounds);
  return pass;
};

export const verifyPassword = async (password: string, hash: string) => {
  const result = await bcrypt.compare(password, hash);
  return result;
};
