const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'www'),
    filename: 'index_bundle.js',
    publicPath: '/public/'
  },
  module: {
    rules: [
      {
        test: /\.(gif|png|jpe?g|svg)$/i,
        use: [
          'file-loader',
          {
            loader: 'image-webpack-loader',
            options: {
              bypassOnDebug: true, // webpack@1.x
              disable: true, // webpack@2.x and newer
            },
          },
        ],
      },
      {
        test: /\.json$/,
        include: /node_modules/,
        loader: 'json-loader'
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.scss$/,
        use: [
          { loader: "style-loader" },
          {
            loader: "css-loader",
            options: {
              modules: true,
              importLoaders: 1,
              localIdentName: "[local]_[hash:base64]",
              sourceMap: true
            },

          },
          "sass-loader"
        ]
      },
      {
        test: /\.svg$/,
        use: "url-loader",
      },
      {
        test: /plugin\.scss$/,
        loaders: [
          'style-loader', 'scss'
        ]
      }
    ]
  },
  devtool: 'inline-source-map',
  devServer: {
    watchOptions: {
      poll: 100
    },
    compress: true,
    allowedHosts: [
      'dev.amypedid.com',
      'localhost'
    ],
    host: '0.0.0.0',
    port: 9090,
    public: 'localhost:9090',
    publicPath: '/public/',
    hot: true,
    historyApiFallback: true
  },
  plugins: [new webpack.NamedModulesPlugin()]
};