const path = require('path');

const sep = path.sep;
export const getTestName = filename => {
  return String.prototype
    .replace.call(filename, new RegExp(`(.*src\\${sep})|(\\.spec\\.js)`, 'g'), '')
    .replace(new RegExp(`\\${sep}__tests__`, 'g'), '')
    .replace(new RegExp(`\\${sep}`, 'g'), ' => ');
};

export default getTestName;
