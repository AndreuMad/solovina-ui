const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ProgressBarPlugin = require('progress-bar-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin'); // eslint-disable-line no-unused-vars
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

const { HotModuleReplacementPlugin } = webpack;

const {
  __DEV__,
  __DEBUG__,
  clientEnv,
  publicUrl
} = require('../env.config');
const { withHash } = require('./utils');

module.exports = [
  // Uncomment to clear build folder for each new build
  // new CleanWebpackPlugin([`${workingDirectory}/build`]),
  new ProgressBarPlugin(),

  // Define free variables
  new webpack.DefinePlugin(clientEnv.stringified),

  new MiniCssExtractPlugin({
    // Options similar to the same options in webpackOptions.output
    // both options are optional
    filename: withHash('static/css/[name].css')
  }),

  // Excludes unnecessary locales from moment.js library
  new webpack.ContextReplacementPlugin(/moment[\/\\]locale$/, /uk|en/),

  /*
   *   DEVELOPMENT PLUGINS START
   */
  ...(__DEV__ ? [
    // Enables Hot Module Replacement, otherwise known as HMR.
    new HotModuleReplacementPlugin()
  ] : []),
  ...(__DEBUG__ ? [
    new BundleAnalyzerPlugin({
      openAnalyzer: false
    })
  ] : []),
  /*
   *  DEVELOPMENT PLUGINS END
   */

  /*
   * PRODUCTION PLUGINS START
   */
  ...(__DEV__ ? [] : [
    // Prepare compressed versions of assets to serve them with Content-Encoding
    new CompressionPlugin({
      asset    : '[path].gz',
      algorithm: 'gzip'
    })
  ]),
  /*
   * PRODUCTION PLUGINS END
   */

  // simplifies creation of HTML files to serve your webpack bundles
  new HtmlWebpackPlugin({
    template: 'assets/index.html',
    inject  : 'body',

    // custom fields passed to the template
    title: 'Dashboard',
    publicUrl
  })
];
