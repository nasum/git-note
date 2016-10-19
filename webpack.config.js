var webpack = require('webpack')
var ExternalsPlugin = webpack.ExternalsPlugin;
var CopyWebpackPlugin = require('copy-webpack-plugin');
var FlowtypePlugin = require('flowtype-loader/plugin');

module.exports = {
  entry: {
    "main/app": './src/main/app.js',
    "rendler/index": './src/rendler/index.jsx'
  },
  output: {
    path: "build",
    filename: "[name].js"
  },
  devtool: 'source-map',
  resolve: {
    extensions: ['', '.webpack.js', '.web.js', '.js', '.jsx', '.scss']
  },
  module: {
    preLoaders: [
      {
        test: /\.js[x]?$/,
        exclude: /node_modules/,
        loader: "eslint-loader"
      },
      {
        test: /\.js[x]?$/,
        loader: "flowtype",
        exclude: /node_modules/
      }
    ],
    loaders: [
      {
        test: /\.js[x]?$/,
        exclude: /(node_modules)/,
        loader: 'babel', // 'babel-loader' is also a valid name to reference
        query: {
          presets: ['es2015','react']
        }
      },
      {
        test: /\.scss$/,
        loaders: ['style', 'css', 'sass']
      },
      {
        test: /\.css$/,
        loader: "style!css"
      },
      {
        test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url-loader?mimetype=image/svg+xml'
      },
      {
        test: /\.woff(\d+)?(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url-loader?mimetype=application/font-woff'
      },
      {
        test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url-loader?mimetype=application/font-woff'
      },
      {
        test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url-loader?mimetype=application/font-woff'
      }
    ]
  },
  eslint: {
    configFile: './.eslintrc.json'
  },
  node: {
    __dirname: false
  },
  plugins: [
    new ExternalsPlugin('commonjs', [
      'electron',
      'devtron'
    ]),
    new CopyWebpackPlugin([
      { from: 'src/index.html', to: 'index.html' }
    ]),
    new FlowtypePlugin()
  ]
}
