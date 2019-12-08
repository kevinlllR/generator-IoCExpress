import * as Joi from 'joi';
import { commonValidations } from './common.validation';

export const taskValidations = {
  create: {
    body: {
      description: Joi.string().allow('')
    }
  },
  update: {
    params: {
      _task: commonValidations.objectIdRequired
    },
    body: {
      typename: Joi.string().required(),
      description: Joi.string().allow('')
    }
  },
  delete: {
    params: {
      _task: commonValidations.objectIdRequired
    }
  }
};