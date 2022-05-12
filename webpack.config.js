require("dotenv").config();
const path = require("path");
const BUILD_DIR = path.resolve(__dirname, "./public/build");
const APP_DIR = path.resolve(__dirname, "./client");
const webpack = require("webpack");
console.log("webpack", process.env);
module.exports = {
  entry: {
    main: APP_DIR + "/index.js",
  },
  output: {
    filename: "bundle.js",
    path: BUILD_DIR,
  },
  plugins: [
    new webpack.DefinePlugin({
      "process.env": {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV),
      },
    }),
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/react"],
          },
        },
      },
    ],
  },
};
