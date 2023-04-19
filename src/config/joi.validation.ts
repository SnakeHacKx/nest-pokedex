import * as Joi from 'joi';

/**
 * Valida las variables de entorno
 */
export const JoiValidationSchema = Joi.object({
  MONGODB_CNN: Joi.required(),
  PORT: Joi.number().default(3005),
  DEFAULT_LIMIT: Joi.number().default(5)
});