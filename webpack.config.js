const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.js$/, // Apply Babel on JS files
        exclude: /node_modules/, // Exclude node_modules folder
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'], // Use preset-env for browser compatibility
          },
        },
      },
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader'], // Loaders for Sass
      },
      {
        test: /\.json$/,
        type: 'json',
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: 'index.html',
    }),
  ],
  mode: 'development',
};
