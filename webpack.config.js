var path = require('path')
var webpack = require('webpack')
module.exports = {
  entry: ['./app.js'],
  output: {
    path: './public',
    filename: 'bundle.js',
    publicPath: '/'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['react', 'es2015']
        }
      }
    ]
  }
    
}
