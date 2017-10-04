/* eslint comma-dangle: ["error",
 {"functions": "never", "arrays": "only-multiline", "objects":
 "only-multiline"} ] */

const webpack = require("webpack");
const pathLib = require("path");

const devBuild = process.env.NODE_ENV !== "production";

const outputDirectory = devBuild ? "webpack" : "javascripts";
const outputPath = `${__dirname}/../app/assets/${outputDirectory}`;

const config = {
  entry: [
    "es5-shim/es5-shim",
    "es5-shim/es5-sham",
    "babel-polyfill",
    "./app/registration"
  ],

  output: {
    filename: "webpack-bundle.js",
    path: outputPath
  },

  resolve: {
    alias: { react: pathLib.resolve("./node_modules/react") },
    extensions: ["*", ".js", ".jsx"],
    modules: ["app", "node_modules"]
  },
  plugins: [
    new webpack.EnvironmentPlugin({ NODE_ENV: "development" }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      },
      mangle: true,
      output: {
        comments: false
      }
    })
  ],
  module: {
    rules: [
      {
        test: require.resolve("react"),
        use: {
          loader: "imports-loader",
          options: { shim: "es5-shim/es5-shim", sham: "es5-shim/es5-sham" }
        },
      },
      {
        test: /\.jsx?$/,
        use: "babel-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: [
          { loader: "style-loader" },
          { loader: "css-loader" }
        ]
      }
    ],
    loaders: [
      { exclude: ["node_modules"], loader: "babel", test: /\\.jsx?$/ },
      { loader: "url-loader", test: /\\.gif$/ },
      { loader: "file-loader", test: /\\.(ttf|eot|svg)$/ },
    ]
  },
};

module.exports = config;

if (devBuild) {
  console.log("Webpack dev build for Rails"); // eslint-disable-line no-console
  module.exports.devtool = "eval-source-map";
} else {
  console.log("Webpack production build for Rails"); // eslint-disable-line no-console
}
