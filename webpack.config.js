module.exports = {
  entry: './src/app.tsx',
  output: {
    path: __dirname + '/public',
    filename: 'bundle/app.js'
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js']
  },
  module: {
    rules: [
      { test: /\.tsx?$/, loader: 'ts-loader' }
    ]
  }
}