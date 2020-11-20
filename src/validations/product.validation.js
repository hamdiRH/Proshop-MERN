const Joi = require('joi');
const { objectId } = require('./custom.validation');

export const getById = {
  params: Joi.object().keys({
    id: Joi.required().custom(objectId),
  }),
};

export const getAllProduct = {
  query: Joi.object().keys({
    pageNumber: Joi.number(),
    keyword: Joi.string(),
  }),
};

export const createProduct = {
  body: Joi.object().keys({}).unknown(true),
};
