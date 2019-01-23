/* eslint-disable import/no-extraneous-dependencies */
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const Dotenv = require('dotenv-webpack');

const path = require('path');

const miniCssPlugin = new MiniCssExtractPlugin({
  filename: '[name].[hash].css',
  chunkFilename: '[id].[hash].css',
});

module.exports = {
  entry: {
    main: './src/index.jsx',
  },
  resolve: {
    extensions: ['.jsx', '.js', '.json'],
  },
  output: {
    filename: '[name].[hash].js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: ['/node_modules'],
        use: [{ loader: 'babel-loader' }],
      },
      {
        test: /\.s?(a|c)ss$/,
        use: [{
          loader: 'style-loader',
        }, {
          loader: 'css-loader',
        }, {
          loader: 'sass-loader',
        }],
      },
      {
        test: /\.(jpe?g|gif|png|woff|woff2|eot|ttf|svg)(\?.*$|$)/,
        loader: 'file-loader?name=images/[name].[ext]',
      },
    ],
  },
  devtool: 'cheap-module-eval-source-map',
  performance: {
    hints: false,
    maxEntrypointSize: 512000,
    maxAssetSize: 512000,
  },
  plugins: [
    new Dotenv(),
    miniCssPlugin,
    new HtmlWebPackPlugin({
      template: './src/index.html',
    }),
    new CleanWebpackPlugin(['dist']),
  ],
};
