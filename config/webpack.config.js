const plugins = require('./webpack/plugins');
const loaders = require('./webpack/loaders');
const { withHash } = require('./webpack/utils');
const {
  __DEV__,
  publicUrl,
  sourceMap,
  workingDirectory
} = require('./env.config');

module.exports = {
  mode   : __DEV__ ? 'development' : 'production',
  target : 'web',
  devtool: sourceMap ? 'source-map' : 'cheap-module-inline-source-map',
  context: `${workingDirectory}/src`,

  entry: {
    app: [
      'babel-polyfill',
      'raf/polyfill',

      // keep hot load only for development
      ...(__DEV__ ? ['react-hot-loader/patch', 'webpack-hot-middleware/client'] : []),

      './main.js'
    ]
  },

  output: {
    publicPath   : publicUrl,
    path         : `${workingDirectory}/build`,
    filename     : withHash('static/js/[name].js'),
    chunkFilename: withHash('static/js/[id].js'),
    library      : 'ctrl'
  },

  module: {
    strictExportPresence: true,
    rules               : loaders
  },

  plugins,

  // Some libraries import Node modules but don't use them in the browser.
  // Tell Webpack to provide empty mocks for them so importing them works.
  // https://webpack.js.org/configuration/node/
  // https://github.com/webpack/node-libs-browser/tree/master/mock
  node: {
    fs : 'empty',
    net: 'empty',
    tls: 'empty'
  }
};
