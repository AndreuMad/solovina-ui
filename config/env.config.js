const path = require('path');
const dotenv = require('dotenv');
const joi = require('joi');
const getClientEnvironment = require('../utils/getClientEnvironment');
const schema = require('./env.validation.schema');

// eslint-disable-next-line no-multi-assign
const env = process.env.NODE_ENV = process.env.NODE_ENV || 'development';

const workingDirectory = path.join(__dirname, '../');
const envPath = path.join(__dirname, `.env${env ? `.${env}` : ''}`).normalize();

// loads environment variables from a .env file into process.env
dotenv.config({ path: envPath });

// validate process.env and create config from result
const { error, value: envVars } = joi.validate(process.env, schema);

if (error) {
  throw new Error(`Config validation error: ${error.message}`);
}

const config = {
  workingDirectory,
  __DEV__            : envVars.NODE_ENV === 'development',
  __DEBUG__          : envVars.DEBUG === 'true',
  clientEnv          : getClientEnvironment(envVars),
  env                : envVars.NODE_ENV,
  sourceMap          : envVars.SOURCE_MAP,
  publicUrl          : envVars.PUBLIC_URL,
  skipHashInFileNames: envVars.SKIP_HASH_IN_FILE_NAMES,
  port               : envVars.PORT
};

module.exports = config;
