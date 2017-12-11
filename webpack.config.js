var path = require('path');
var webpack = require('webpack');
 
module.exports = {
  entry: './src/main.js',
  output: { path: __dirname, filename: 'build/bundle.js' },
  module: {
    loaders: [
    	{ test: /\.(jpg|png)$/, loader: 'url?limit=25000' },
    	{ test: /\.scss$/, loader: "style-loader!css-loader!sass-loader" },
      { test: /.jsx?$/, loader: 'babel-loader', exclude: /node_modules/, query: { presets: ['env', 'react'] } }
    ]
  },
};
