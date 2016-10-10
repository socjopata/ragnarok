var path = require ('path');

module.exports = {
  context: __dirname,
  entry: {
    app: '../app/assets/javascripts/'
  },
  output: {
    filename: 'main.js',
    path: __dirname + 'app/assets/javascripts/bundled'
  },
  devtool: 'eval-source-map',
  resolve: {
    modulesDirectories: [
      "node_modules",
      "assets/javascripts/components"
    ],
    root: path.resolve(".app")
    extensions: ['', '.js', '.jsx']
  },
  module: {
    preLoaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'source-map'
      }
    ],
    loaders: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['react', 'es2015', 'stage-0']
        }
      }
    ]
  }
};
