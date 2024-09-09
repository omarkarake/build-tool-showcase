const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");
const path = require("path");

module.exports = merge(common, {
  mode: "production",
  output: {
    filename: "bundle.[contenthash].js", // Cache-busting filename
    path: path.resolve(__dirname, "dist"),
    clean: true, // Clean the output folder before each build
  },
});
