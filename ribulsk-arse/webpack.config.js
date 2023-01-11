const path = require("path");

module.exports = {
  mode: "production",
  optimization: {
    usedExports: true,
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
};
