import "webpack-dev-server";
import webpack, { Configuration } from "webpack";
import { resolve } from "node:path";
import HtmlWebpackPlugin from "html-webpack-plugin";

const NODE_ENV = process.env.NODE_ENV as Configuration["mode"];
const PREFIX =  process.env.NODE_ENV == "production" ? '/otus-spa-deploy-2023-12' : ''

const config: Configuration = {
  entry: "./src/index.ts",
  output: {
    filename: "bundle.js",
    path: resolve(__dirname, "dist"),
    clean: true,
    environment: {
      arrowFunction: false,
    },
    publicPath: PREFIX + "/",
  },
  resolve: {
    extensions: [".js", ".ts"],
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-typescript"],
          },
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "public/index.html",
    }),
    new HtmlWebpackPlugin({
      template: "public/index.html",
      filename: "404.html",
    }),
    new webpack.DefinePlugin({
      IS_PRODUCTION: NODE_ENV == "production",
      PREFIX: JSON.stringify(PREFIX),
    }),
  ],
  devServer: {
    compress: true,
    port: 9000,
    watchFiles: ["public/index.html"],
    historyApiFallback: true,
  },
};

export default config;