const path = require('path');
var nodeExternals = require('webpack-node-externals');

module.exports = {
  target: 'node',
  externals: [
    nodeExternals({
      modulesDir: './node_modules/'
    })
  ],
  entry: './main.js',
  output:{
    path: path.resolve(__dirname, 'build'),
    filename: 'main.js',
    library: 'main.js',
    libraryTarget: 'commonjs2',
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        query: {
          presets: [
            'es2015',
            'stage-0'
          ]
        }
      }
    ]
  }
};
