const webpack = require("webpack");
const webpackConfig = require("./webpack.common");
const webpackMerge = require("webpack-merge");
const config = require("../build");

module.exports = webpackMerge(webpackConfig, {
  output: {
    path: config.common.output,
    filename: config.common.assets + config.common.js + "bundle.js"
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin(),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurrenceOrderPlugin()
  ]
});
