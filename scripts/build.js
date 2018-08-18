const webpack = require('webpack');
const webpackConfig = require('../config/webpack.config');

webpack(webpackConfig).run((err, stats) => {
  if (err) {
    console.error(err); // eslint-disable-line no-console
    return;
  }

  const printOpts = {
    stats : 'minimal',
    colors: true
  };

  console.log(stats.toString(printOpts)); // eslint-disable-line no-console
});
