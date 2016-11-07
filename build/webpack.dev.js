const webpackConfig = require("./webpack.common");
const webpackMerge = require("webpack-merge");

module.exports = webpackMerge(webpackConfig, {
  devServer: {
    // noInfo: true,
    open: true,
    inline: true
  },
  devtool: "source-map"
});
