const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'development',
  devServer: {
    host: 'localhost',
    port: 3000,
    open: true,
    historyApiFallback: true,
    proxy: {
      '/api/v1': {
        target: 'https://heimdal-ah-staging.herokuapp.com',
        secure: false,
      },
    },
  },
  node: {
    fs: 'empty',
  },
});
