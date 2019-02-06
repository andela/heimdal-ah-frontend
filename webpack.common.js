/* eslint-disable import/no-extraneous-dependencies */
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const path = require('path');
const webpack = require('webpack');
require('dotenv').config();

const miniCssPlugin = new MiniCssExtractPlugin({
  filename: '[name].[hash].css',
  chunkFilename: '[id].[hash].css',
});

module.exports = {
  entry: ['@babel/polyfill', './src/index.jsx'],
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
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
          },
          {
            loader: 'sass-loader',
          },
        ],
      },
      {
        test: /\.(jpe?g|gif|png|woff|woff2|eot|ttf|svg)(\?.*$|$)/,
        use: [
          'file-loader',
          {
            loader: 'image-webpack-loader',
            options: {
              bypassOnDebug: true,
              disable: true,
            },
          },
        ],
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
    new webpack.DefinePlugin({
      'process.env.BASE_URL_PROD': JSON.stringify(process.env.BASE_URL_PROD),
      'process.env.CLOUDINARY_URL': JSON.stringify(process.env.CLOUDINARY_URL),
      'process.env.CLOUDINARY_UPLOAD_PRESET': JSON.stringify(
        process.env.CLOUDINARY_UPLOAD_PRESET,
      ),
    }),
    miniCssPlugin,
    new HtmlWebPackPlugin({
      template: './src/index.html',
    }),
    new CleanWebpackPlugin(['dist']),
  ],
  resolve: {
    extensions: ['.js', '.jsx', '.json', '.css', '.jpg', '.png'],
  },
};
