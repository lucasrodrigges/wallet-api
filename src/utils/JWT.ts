import jwt from 'jsonwebtoken';

const jwtConfig = {
  secret: process.env.JWT_SECRET as string,
  expiresIn: '1h',
};

export const createToken = (payload: any) => (
  jwt.sign(payload, jwtConfig.secret, { expiresIn: jwtConfig.expiresIn }));

export const verifyToken = (token: string) => {
  try {
    const decoded = jwt.verify(token, jwtConfig.secret);
    return decoded;
  } catch (err) {
    return false;
  }
};
