// Grab NODE_ENV and REACT_APP_* environment variables and prepare them to be
// injected into the application via DefinePlugin in Webpack configuration.
const REACT_APP = /^REACT_APP_/i;

module.exports = envVars => {
  const defEnv = {
    // Useful for determining whether we’re running in production mode.
    // Most importantly, it switches React into the correct mode.
    __DEV__   : envVars.NODE_ENV === 'development',
    NODE_ENV  : envVars.NODE_ENV || 'development',
    PUBLIC_URL: envVars.PUBLIC_URL || ''
  };

  const raw = Object.keys(envVars)
    .filter(key => REACT_APP.test(key))
    .reduce((env, key) => {
      env[key] = envVars[key];
      return env;
    }, defEnv);

  // Stringify all values so we can feed into Webpack DefinePlugin
  const stringified = {
    'process.env': Object.keys(raw)
      .reduce((env, key) => {
        env[key] = JSON.stringify(raw[key]);
        return env;
      }, {})
  };

  return {
    raw,
    stringified
  };
};
