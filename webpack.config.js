const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
module.exports = {
  entry: {
    index: "./src/index.js",
    navbar: "./src/navbar.js",
  },

  mode: "development",
  devtool: "inline-source-map",
  plugins: [
    new HtmlWebpackPlugin({
      title: "Pizza Hut",
    }),
  ],
  output: {
    // filename: "main.js",
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
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