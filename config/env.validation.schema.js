const joi = require('joi');

const envEnum = ['development', 'production', 'test'];

module.exports = joi.object({
  NODE_ENV               : joi.string().valid(envEnum).required(),
  PUBLIC_URL             : joi.string().allow('').default(''),
  PORT                   : joi.string().allow('').default(4000),
  SOURCE_MAP             : joi.boolean().default(false),
  SKIP_HASH_IN_FILE_NAMES: joi.boolean().default(true),
  DEBUG                  : joi.string().default(false)
}).unknown().required();
