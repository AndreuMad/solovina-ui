require('babel-core/register');
const noop = () => '';
require.extensions['.scss'] = noop;
require.extensions['.css'] = noop;
require.extensions['.svg'] = noop;
