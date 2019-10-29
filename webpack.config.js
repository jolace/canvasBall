const path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/view.js',
  output: {
    filename: 'ballInCanvas.js',
    path: path.resolve(__dirname, 'dist'),
  },
};