const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: path.resolve(__dirname, 'src/index'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [{
      test: /\.js$/,
      include: path.resolve(__dirname, 'src'),
      use: ['babel-loader']
    },
    {test : /\.css$/, use:['style-loader', 'css-loader']},
    {test: /\.(jpg|png)$/, use: { loader: 'url-loader'},}]
  },
  devServer: {
    contentBase:  path.resolve(__dirname, 'dist'),
    port: 3000
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "public/index.html" //source html
    })
  ]
};