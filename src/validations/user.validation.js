const Joi = require('joi');
const { password, objectId } = require('./custom.validation');

export const login = {
  body: Joi.object().keys({
    email: Joi.string().required(),
    password: Joi.string().required(),
  }),
};

export const register = {
  body: Joi.object().keys({
    name: Joi.string().required(),
    email: Joi.string().required(),
    password: Joi.string().required(),
  }),
};

export const updateProfile = {
  body: Joi.object().keys({
    name: Joi.string(),
    email: Joi.string(),
    password: Joi.string(),
  }),
};

export const userId = {
  params: Joi.object().keys({
    id: Joi.required().custom(objectId),
  }),
};

export const updateUser = {
  body: Joi.object().keys({
    name: Joi.string(),
    email: Joi.string(),
    password: Joi.string(),
  }),
  params: Joi.object().keys({
    id: Joi.required().custom(objectId),
  }),
};
