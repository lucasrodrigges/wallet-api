import Joi from 'joi';

export const newUser = Joi.object({
  name: Joi.string().min(3).required(),
  email: Joi.string().email().required(),
  password: Joi.string().min(8).required(),
});

export const editUser = Joi.object({
  name: Joi.string().min(3),
  email: Joi.string().email(),
  password: Joi.string().min(8),
});

export const login = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().min(8).required(),
});
