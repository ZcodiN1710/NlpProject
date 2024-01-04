const path = require("path");
const htmlWebpackPlugin = require("html-webpack-plugin");
const miniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin")
const terserPlugin = require("terser-webpack-plugin")
const WorkboxPlugin = require('workbox-webpack-plugin');
// const CleanWebpackPlugin  = require("clean-webpack-plugin");

module.exports = {
  mode: "production",
  entry: path.resolve(__dirname, "./src/clientSrc/index.js"),
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
    clean: true,
  },
  optimization: {
    minimizer: [
      new CssMinimizerPlugin(),new terserPlugin()
    ],
  },
  module: {
    rules: [
      {
        test: /\.scss$/i,
        use: [miniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      },
      {
        test: /\.js$/i,
        exclude: /node_modules/,
        use:{
          loader: "babel-loader",
          options: {
            presets: [["@babel/preset-env", { targets: "defaults" }]],
          },
        },
      },
    ],
  },
  plugins: [
    new htmlWebpackPlugin({
      title: "Natural language processor",
      filename: "index.html",
      template: "./src/clientSrc/views/template.html",
    }),
    new miniCssExtractPlugin({}),
    new WorkboxPlugin.GenerateSW(),
  ],
};
