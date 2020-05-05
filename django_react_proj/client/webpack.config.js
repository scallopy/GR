const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

// Constant with your paths

const paths = {
  // Put your structure paths here
  DIST: path.resolve(__dirname, 'public/dist'),
  SRC: path.resolve(__dirname, 'src'),
  JS: path.resolve(__dirname, 'src/components'),
  PUBLIC: path.resolve(__dirname, 'public')
};

// Webpack configuration
// Change your entry point here

module.exports = {
  entry: ['./src/index.js'],
  output: {
    path: path.resolve(__dirname, 'public/dist'),
    filename: 'app.bundle.js'
  },

  // Tell webpack to use html plugin
  plugins: [
    new HtmlWebpackPlugin({
        template: path.join(paths.PUBLIC, 'index.html'),
      }),
    new ExtractTextPlugin('style.bundle.css'),
  ],

  // Loaders configuration
  // We are telling webpack to use 'babel-loader' for .js and .jsx
  // files

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },{
        test: /\.css$/,
        loader: ExtractTextPlugin.extract({
          use: 'css-loader',
        }),
      },{
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract({
          use: ['css-loader', 'sass-loader']
        }),
      },{
        test: /\.(png|jpg|gif)$/,
        use: ['file-loader'],
      },
    ],
  },

  resolve: {
    extensions: ['.js', '.jsx', '.json'],
    alias: {
      '~~': path.resolve(__dirname, 'src')
    }
  },
  devServer: {
    contentBase: path.join(__dirname, 'public'),
    compress: false,
    port: 3000,
    historyApiFallback: true,
  },
  devtool: 'source-map'
}
