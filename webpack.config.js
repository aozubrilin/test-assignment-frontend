const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
// const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCssAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const TerserWebpackPlugin = require("terser-webpack-plugin");

module.exports = (env = {}) => {
  const { mode = "development" } = env;

  const isProd = mode === "production";
  const isDev = mode === "development";

  const optimization = () => {
    const config = {
      splitChunks: {
        chunks: "all",
        name: "vendors",
      },
    };

    if (isProd) {
      config.minimizer = [
        new OptimizeCssAssetsPlugin(),
        new TerserWebpackPlugin(),
      ];
    }

    return config;
  };

  const getStyleLoaders = () => {
    return [
      isProd
        ? {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: path.resolve(__dirname, "build"),
            },
          }
        : "style-loader",
      "css-loader",
      "postcss-loader",
    ];
  };

  const getPlugins = () => {
    const plugins = [
      new HtmlWebpackPlugin({
        template: "./index.html",
        minify: {
          collapseWhitespace: isProd,
        },
      }),
      // new CleanWebpackPlugin(),
    ];
    if (isProd) {
      plugins.push(
        new MiniCssExtractPlugin({
          filename: "main-[hash:8].css",
        })
      );
    }

    return plugins;
  };

  return {
    context: path.resolve(__dirname, "src"),
    mode: isProd ? "production" : isDev && "development",
    entry: {
      main: "./index.tsx",
    },
    output: {
      path: path.resolve(__dirname, "./build"),
      filename: isDev ? `[name].bundle.js` : `[name].bundle.[hash].js`,
    },
    resolve: {
      extensions: [".js", ".tsx", ".ts", ".jsx"],
    },
    optimization: optimization(),
    devtool: isProd ? false : "source-map",
    plugins: getPlugins(),
    module: {
      rules: [
        {
          test: /\.(tsx|ts|jsx)?$/,
          exclude: /node_modules/,
          use: { loader: "awesome-typescript-loader" },
        },
        {
          enforce: "pre",
          test: /\.js$/,
          loader: "source-map-loader",
        },
        {
          test: /\.(jpe?g|png|gif)$/i,
          exclude: /fonts/,
          loader: "file-loader",
          options: {
            outputPath: "images",
            name: "[name].[ext]",
          },
        },
        {
          test: /\.(woff|woff2)$/,
          loader: "file-loader",
          options: {
            outputPath: "fonts/",
            name: "[name].[ext]",
          },
        },
        {
          test: /\.(css)$/,
          exclude: /node_modules/,
          use: getStyleLoaders(),
        },
        {
          test: /\.(scss)$/,
          exclude: /node_modules/,
          use: [...getStyleLoaders(), "sass-loader"],
        },
      ],
    },
    devServer: {
      open: true,
      port: 3000,
      hot: isDev,
    },
  };
};
