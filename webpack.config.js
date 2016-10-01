var webpack = require('webpack')
var ExternalsPlugin = webpack.ExternalsPlugin;
var CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: {
    "main/app": './src/main/app.js',
    "rendler/index": './src/rendler/index.js'
  },
  output: {
    path: "build",
    filename: "[name].js"
  },
  resolve: {
    extensions: ['', '.webpack.js', '.web.js', '.js']
  },
  module: {
    preLoaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "eslint-loader"
      }
    ],
    loaders: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        loader: 'babel', // 'babel-loader' is also a valid name to reference
        query: {
          presets: ['es2015']
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
    ])
  ]
}
