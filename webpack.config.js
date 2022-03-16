const path = require('path');

module.exports = {
  entry: '/client/src/index.js',
  output: {
    path: path.resolve(__dirname, 'client/dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [{
      test:/\.(js|jsx)$/,
      exclude: /node_modules/,
      use: 'babel-loader'
    }]
  },
  mode: 'development',
  resolve: {
    extensions: ['.js', '.jsx']
  }
}