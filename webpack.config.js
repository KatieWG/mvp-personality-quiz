const path = require('path');

module.exports = {
  entry: '/client/src/index.js',
  output: {
    path: path.resolve(__dirname, 'client/dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [{
      test:/\.(js|jsx|css|woff|woff2)$/, //I think I lack understanding of this line
      exclude: /node_modules/,
      use: 'babel-loader'
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      }
    ]
  },
  mode: 'development',
  resolve: {
    extensions: ['.js', '.jsx', '.woff', '.woff2', '.css']
  }
}