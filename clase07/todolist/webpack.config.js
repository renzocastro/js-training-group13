const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    main: './src/scripts/index.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: { loader: 'babel-loader' }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      files: {
        css: [ 'styles.css' ]
      },
      title: 'TodoList',
      filename: 'index.html',
      template: './src/index.html'
    })
  ]
};
