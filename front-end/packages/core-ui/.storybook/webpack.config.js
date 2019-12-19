const path = require('path');
module.exports = {
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.js$/,
        loader: "source-map-loader",
        exclude: [
          /node_modules\//
        ]
      },
      {
        test: /\.tsx?$/,
        include: path.resolve(__dirname, '../src'),
        loader: 'awesome-typescript-loader',
      }
    ]
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"]
  }
};