import * as Joi from 'joi';

export const commonValidations = {
  objectIdRequired: Joi.string().regex(/^[0-9a-fA-F]{24}$/).required(),
  objectId: Joi.string().regex(/^[0-9a-fA-F]{24}$/)
};