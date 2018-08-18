const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const webpackHotMiddleware = require('webpack-hot-middleware');
const envConfig = require('../config/env.config');
const webpackConfig = require('../config/webpack.config');
const printServerInfo = require('../utils/printServerInfo');

const {
  port,
  dashboardApiUrl
} = envConfig;

const compiler = webpack(webpackConfig);

// clear terminal on each build to keep it clean
compiler.plugin('compile', () => printServerInfo(envConfig));

const devServerOptions = {
  progress: true,
  open    : true,

  stats: {
    // Add asset Information
    assets         : false,
    // Sort assets by a field
    // You can reverse the sort with `!field`.
    assetsSort     : 'field',
    // Add information about cached (not built) modules
    cached         : false,
    // Show cached assets (setting this to `false` only shows emitted files)
    cachedAssets   : false,
    // Add children information
    children       : false,
    // Add chunk information (setting this to `false` allows for a less verbose output)
    chunks         : true,
    // Add built modules information to chunk information
    chunkModules   : false,
    // Add the origins of chunks and chunk merging info
    chunkOrigins   : false,
    // Sort the chunks by a field
    // You can reverse the sort with `!field`. Default is `id`.
    chunksSort     : 'field',
    // Context directory for request shortening
    context        : '../src/',
    // `webpack --colors` equivalent
    colors         : true,
    // Display the distance from the entry point for each module
    depth          : false,
    // Display the entry points with the corresponding bundles
    entrypoints    : false,
    // Add --env information
    env            : false,
    // Add errors
    errors         : true,
    // Add details to errors (like resolving log)
    errorDetails   : true,
    // Add the hash of the compilation
    hash           : true,
    // Set the maximum number of modules to be shown
    maxModules     : 15,
    // Add built modules information
    modules        : false,
    // Sort the modules by a field
    // You can reverse the sort with `!field`. Default is `id`.
    modulesSort    : 'field',
    // Show dependencies and origin of warnings/errors (since webpack 2.5.0)
    moduleTrace    : false,
    // Show performance hint when file size exceeds `performance.maxAssetSize`
    performance    : true,
    // Show the exports of the modules
    providedExports: false,
    // Add public path information
    publicPath     : true,
    // Add information about the reasons why modules are included
    reasons        : true,
    // Add the source code of modules
    source         : true,
    // Add timing information
    timings        : true,
    // Show which exports of a module are used
    usedExports    : false,
    // Add webpack version information
    version        : true,
    // Add warnings
    warnings       : true
  },

  hot             : true,
  inline          : true,
  watchContentBase: true,
  clientLogLevel  : 'none',
  watchOptions    : {
    ignored         : '*/node_modules/',
    aggregateTimeout: 500,
    poll            : 1000
  },

  before(app) {
    app.use(webpackHotMiddleware(compiler));
  }
};

// if you specified DOC_FLOW_ADMIN_API_URL env var then it creates proxy
if (dashboardApiUrl) {
  devServerOptions.proxy = {
    '/api': {
      target      : dashboardApiUrl,
      changeOrigin: true,
      ws          : true
    }
  };
}

const server = new WebpackDevServer(compiler, devServerOptions);

if (!port) {
  throw new Error('Please specify PORT env variable');
}

server.listen(port);
