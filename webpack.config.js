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
  resolve: {
    extensions: ['', '.webpack.js', '.web.js', '.js', '.jsx']
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
