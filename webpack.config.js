const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
// const WebpackCdnPlugin = require("webpack-cdn-plugin");
module.exports = {
  entry: {
    index: "./src/index.js",
    navbar: "./src/navbar.js",
    home: "./src/home.js",
    friconix: "./src/friconix.js",
    contact: "./src/contact.js",
    menu: "./src/menu.js",
  },

  mode: "production",
  // devtool: "inline-source-map",
  plugins: [
    new HtmlWebpackPlugin({
      title: "Pizza Hut",
    }),
  ],
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },
  optimization: {
    runtimeChunk: "single",
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif|webp`)$/i,

        type: "asset/resource",
      },
    ],
  },
};
