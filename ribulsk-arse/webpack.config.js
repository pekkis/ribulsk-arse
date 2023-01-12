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
    innerGraph: true,

    splitChunks: {
      cacheGroups: {
        yleisratio: {
          priority: 100,
          test(module) {
            return module.resource.includes("yleisradio");
          },

          // test: /[\\/]yleisradio[\\/]/,
          name: "yleisratio",
          chunks: "all",
        },

        commons: {
          priority: 50,
          test: /[\\/]node_modules[\\/]/,
          name: "vendors",
          chunks: "all",
        },
      },
    },

    /*
    splitChunks: {
      chunks: "all",
      minSize: 20000,
      minRemainingSize: 0,
      minChunks: 1,
      maxAsyncRequests: 30,
      maxInitialRequests: 30,
      enforceSizeThreshold: 50000,
      cacheGroups: {
        yleisratio: {
          enforce: true,
          test(module) {
            console.log(module.resource);

            const tushi = module.resource.includes("yleisradio");

            console.log(tushi);

            return tushi;

            return false;
          },
          priority: 0,
          reuseExistingChunk: true,
          filename: "js/[name]/bundle.js",
        },
        defaultVendors: {
          test: /[\\/]node_modules[\\/]/,
          priority: 10,
          reuseExistingChunk: true,
        },
        default: {
          minChunks: 2,
          priority: -20,
          reuseExistingChunk: true,
        },
      },
    },
    */
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
