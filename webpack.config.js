const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const DIST_DIR = path.resolve(__dirname, "dist");
const SRC_DIR = path.resolve(__dirname, "src");

const config = {
  entry: SRC_DIR + "/app/index.js",
  output: {
    path: DIST_DIR + "/app",
    filename: "bundle.js",
    publicPath: "/app/"
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  module: {
      rules: [
      {
        test: /\.js$/,
        include: SRC_DIR,
        loader: 'react-hot-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.js$/,
        include: SRC_DIR,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['react', 'es2015', 'stage-2']
        }
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: "css-loader",
           allChunks: true
        }),
      }
    ]
  },
  plugins: [
   new ExtractTextPlugin("styles.css")
 ]
};

module.exports = config;
