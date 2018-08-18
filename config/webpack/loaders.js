const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { __DEV__, sourceMap } = require('../env.config');
const { withHash } = require('./utils');

module.exports = [
  {
    test   : /\.(js|jsx)$/,
    exclude: /(node_modules|bower_components)/,
    loaders: [
      {
        loader : 'babel-loader',
        options: {
          babelrc: false,
          presets: [
            ['es2015', { modules: false }],
            [
              'env',
              {
                targets: {
                  browsers: ['last 2 versions', 'safari >= 7']
                }
              }
            ],
            'react',
            'stage-0'
          ],
          plugins: [
            'transform-react-jsx',
            'transform-runtime',
            'react-html-attrs',
            'react-hot-loader/babel',
            'transform-decorators-legacy'
          ]
        }
      }
    ]
  },
  {
    test: /\.(scss|css)$/,
    use : [
      ...(__DEV__ ? [
        {
          loader : 'style-loader',
          options: { sourceMap }
        }
      ] : [MiniCssExtractPlugin.loader]),
      {
        loader : 'css-loader',
        options: {
          sourceMap,
          minimize: !sourceMap
        }
      },
      {
        loader : 'postcss-loader',
        options: {
          sourceMap,
          config: {
            path: './config/postcss.config.js'
          }
        }
      },
      {
        loader : 'sass-loader',
        options: { sourceMap }
      }
    ]
  },
  {
    test  : /\.json$/,
    loader: 'json-loader',
    type  : 'javascript/auto'
  },

  // "file" loader makes sure those assets end up in the `build` folder.
  {
    exclude: [
      /\.html$/,
      /\.(js|jsx)$/,
      /\.(scss|css)/,
      /\.json$/,
      /\.svg$/,
      /\.bmp$/,
      /\.gif$/,
      /\.jpe?g$/,
      /\.png$/
    ],
    loader : 'file-loader',
    options: {
      name      : withHash(`${__DEV__ ? '' : '/'}static/media/[name].[ext]`)
    }
  },
  // "url" loader works just like "file" loader but it also embeds
  // assets smaller than specified size as data URLs to avoid requests.
  {
    test   : [
      /\.svg$/,
      /\.bmp$/,
      /\.gif$/,
      /\.jpe?g$/,
      /\.png$/
    ],
    loader : 'url-loader',
    options: {
      limit: 10000,
      name : withHash('/static/media/[name].[ext]')
    }
  }
];
