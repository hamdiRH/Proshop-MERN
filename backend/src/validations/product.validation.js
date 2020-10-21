const Joi = require('joi');
const { objectId } = require('./custom.validation');

export const getById = {
  params: Joi.object().keys({
    id: Joi.required().custom(objectId),
  }),
};
