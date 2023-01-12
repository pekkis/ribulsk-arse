const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const { StatsWriterPlugin } = require("webpack-stats-plugin");

module.exports = {
  mode: "production",
  stats: {
    chunks: true,
    logging: "verbose",
    assets: true,
  },
  optimization: {
    usedExports: true,
    splitChunks: {
      chunks: "all",
    },
  },
  output: {
    path: path.resolve(__dirname, "dist"),
  },
  entry: {
    main: path.resolve(__dirname, "src", "client.js"),
  },
  module: {
    rules: [
      {
        test: /\.(jsx?|tsx?)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            envName: "browser",
          },
        },
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new StatsWriterPlugin({
      filename: "stats.json",
      assets: true,
    }),
  ],
};
