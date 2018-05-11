const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const IndexHtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: 'index.html',
  filename: 'index.html',
  inject: 'body',
  chunks: ['index'], // only include index.js (see entry point)
});

// move files to dist folder
const CopyWebpackPluginConfig = new CopyWebpackPlugin([
  { context: 'images', from: '*', to: 'images' }, // copy images to dist folder
  { context: 'fonts', from: '*', to: 'fonts' }, // copy images to dist folder
]);

module.exports = {

  context: path.resolve(__dirname, 'src'),

  entry: {
    index: './index.js',
  },

  devtool: 'source-map',
  output: {
    path: path.resolve('dist'),
    filename: '[name].bundle.js',
  },
  resolve: {
    extensions: ['.js'],
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
      },
    ],
    rules: [
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            {
              loader: 'css-loader',
              options: {
                minimize: true,
                sourceMap: false,
              },
            },
            {
              loader: 'sass-loader',
              options: {
                minimize: true,
                sourceMap: false,
              },
            },
          ],
        }),
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(['dist']),
    IndexHtmlWebpackPluginConfig,
    CopyWebpackPluginConfig,
    new ExtractTextPlugin('sass/[name].css', {
      allChunks: false,
    }),
  ],

  devServer: {
    // static files served from here
    contentBase: path.resolve(__dirname, "./dist/images"),
    compress: true,
    port: 2000,
    stats: 'errors-only',
    open: true
  },
};
