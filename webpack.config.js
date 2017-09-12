var webpack = require('webpack');
var path    = require('path');

var APP_DIR   = path.resolve(__dirname, 'front/app');

var config = {
  entry: APP_DIR + '/index.jsx',
  output: {
    path: path.resolve(__dirname, 'front/assets/js'),
    filename: 'bundle.js'
  },
  resolve: {
    alias: { frontapp: path.resolve(__dirname, 'front/app') },
    extensions: ['.js', '.jsx']
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        include: APP_DIR,
        loader: 'babel-loader',
        query: { presets: ['es2015','react', 'stage-2'] }
      }
    ]
  }
};

module.exports = config;

