// Common client-side webpack configuration used by webpack.hot.config and webpack.rails.config.

const webpack = require('webpack');
const path = require('path');

const devBuild = process.env.NODE_ENV !== 'production';
const nodeEnv = devBuild ? 'development' : 'production';

const config = {
  entry: [
    './app/bundles/HomeComponent/startup/HomeComponentApp',
    './app/bundles/BasicStatInput/startup/BasicStatInputApp',
    './app/bundles/LocaleSwitcher/startup/LocaleSwitcherApp',
    './app/bundles/Translations/startup/HomeApp'
  ],
  output: {
    filename: 'main.js',
    path: '../app/assets/javascripts/generated'
  },
  devtool: 'eval-source-map',
  resolve: {
    alias: {
      react: path.resolve('./node_modules/react'),
      'react-dom': path.resolve('./node_modules/react-dom'),
    },
    modulesDirectories: [
      'node_modules',
      'app/bundles/HomeComponent'
    ],
    extensions: ['', '.js', '.jsx', '.json']
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(nodeEnv),
      },
    }),
  ],
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          cacheDirectory: true,
          presets: ['react', 'es2015', 'latest', 'stage-0']
        }
      },
      {
        test: /\.json$/,
        loader: 'json'
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015', 'latest', 'stage-0']
        },
      },
    ],
    externals: {
     'cheerio': 'window',
     'react/addons': true,
     'react/lib/ExecutionEnvironment': true,
     'react/lib/ReactContext': true
    },
  },
};

module.exports = config;

if (devBuild) {
  console.log('Webpack dev build for Rails'); // eslint-disable-line no-console
  module.exports.devtool = 'eval-source-map';
} else {
  config.plugins.push(
    new webpack.optimize.DedupePlugin()
  );
  console.log('Webpack production build for Rails'); // eslint-disable-line no-console
}
