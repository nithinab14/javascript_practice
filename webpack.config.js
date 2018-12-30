const path = require('path');
const arg = process.argv[process.argv.length - 1]
const fileName = arg.substring(2, arg.length);

module.exports = {
  mode: 'development',
  entry: path.resolve(__dirname, 'src', fileName, 'index.js'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js',
    publicPath: '/dist/'
  },
  devServer: {
    openPage: `src/${fileName}`
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ]
  }
};