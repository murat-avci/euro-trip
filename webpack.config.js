const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: ["@babel/polyfill","./source/js/index.js"],
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, "bundles")
  },
  mode: "development",

  module: {
      rules: [
          {
            test: /\.js$/,
            exclude: /(node_modules)/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ["@babel/preset-env"]
                }
            }
          }
      ]
  }
};
