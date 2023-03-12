const HtmlWebPackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const webpack = require('webpack');
const path = require('path');

module.exports = {
  entry: {
      app: path.join(__dirname, 'src/index.js')
  },
  output: {
    path: path.join(__dirname, '../webroot/'),
    filename: 'js/[name].js',
  },
  target: "node",
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
          },
        ],
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
            {
                loader: MiniCssExtractPlugin.loader,
            },
            {
                loader: 'css-loader',
            },
            {
                loader: 'postcss-loader',
            },
            {
                loader: 'sass-loader',
                options: {
                    implementation: require('sass'),
                  },
            },
        ]
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'images',
            },
          },
        ],
      },
      {
        test: /\.(woff|woff2|ttf|otf|eot)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'font/[name].[ext]',
              outputPath: 'font',
              publicPath: path => {
                return `/${path}`;
              },
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new webpack.ProvidePlugin({
        $: 'jquery',
        jQuery: 'jquery',
        CodeMirror: 'codemirror',
    }),
    new MiniCssExtractPlugin({
      filename: 'css/[name].css',
    }),
  ],
};
