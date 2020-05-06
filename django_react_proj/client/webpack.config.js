const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

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
    new webpack.ProgressPlugin(),
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
    new webpack.HotModuleReplacementPlugin(),
    new MiniCssExtractPlugin({
      filename: "styles.bundle.css"
    })
  ],

  // Loaders configuration
  // We are telling webpack to use 'babel-loader' for .js and .jsx
  // files

  module: {
    rules: [
      {
        test: /\.(png|jpg)$/,
        loader: 'url-loader'
      },{
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },{
        test: /\.woff2?(\?[a-z0-9#]+)?$/,
        // Inline small woff files and output them below font/.
        // Set mimetype just in case.
        loader: 'url-loader',
        options: {
          name: 'fonts/[name].[hash].[ext]',
          limit: 50000,
          mimetype: 'application/font-woff',
          outputPath: 'css/'
        }
      },{
        test: /\.(ttf|svg|eot)(\?[a-z0-9#]+)?$/,
        loader: 'file-loader',
        options: {
          name: 'fonts/[name].[hash].[ext]',
          outputPath: 'css/'
        }
      },{
        test: /\.(css|sass|scss)$/,
        use: ['style-loader', MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
      },{
        test: /\.(png|jpg|gif)$/,
        use: ['file-loader'],
      },
    ],
  },

  resolve: {
    extensions: ['.js', '.jsx', '.json'],
    alias: {
      '~~': path.resolve(__dirname, 'src'),
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
