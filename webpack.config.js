const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
  mode: 'production',

  // devtool: 'source-map',

  entry: {
    index: './src/index.js'
  },

  output: {
    filename: '[name].js'
  },

  module: {
    rules: [
      {
        test: /\.(js)$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }
    ],
  },

  optimization: {
    minimizer: [ new TerserPlugin({ minify: TerserPlugin.swcMinify, terserOptions: { sourceMap: true }, parallel: true }) ],
  }
};
