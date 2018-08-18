const {
  skipHashInFileNames, __DEV__
} = require('../env.config');

const withHash = (template, hash = 'hash:6') => {
  if (skipHashInFileNames) {
    return template;
  }

  if (__DEV__) {
    return `${template}?hash=[${hash}]`;
  }

  return template.replace(/\.[^.]+$/, `.[${hash}]$&`);
};

module.exports = {
  withHash
};
