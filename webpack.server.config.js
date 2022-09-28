const path = require("path");
const nodeExternals = require("webpack-node-externals");

module.exports = (env, argv) => {
  const SERVER_PATH =
    argv.mode === "production"
      ? "./server/server-prod.js"
      : "./server/server-dev.js";
  const srcDir = path.resolve(__dirname, "./src");
  return {
    entry: {
      server: SERVER_PATH,
    },
    output: {
      path: path.join(__dirname, "dist"),
      publicPath: "/",
      filename: "[name].js",
    },
    mode: argv.mode,
    target: "node",
    node: {
      __dirname: false,
      __filename: false,
    },
    externals: [nodeExternals()],
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader",
          },
        },
      ],
    },
  };
};
