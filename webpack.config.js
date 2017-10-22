const path = require('path')

module.exports = {
  // the entry file for the bundle
  entry: path.join(__dirname, '/client/src/app/client_index.js'),

  // the bundle file we will get in the result
  output: {
    path: path.join(__dirname, '/client/dist/js'),
    filename: 'client_index.js'
  },

  module: {

    // apply loaders to files that meet given conditions
    loaders: [{
      test: /\.js?$/,
      include: path.join(__dirname, '/client/src/app'),
      exclude: ['node_modules'],
      loader: 'babel-loader',
      query: {
        presets: ['react', 'es2015']
      }
    }]
  },

  // start Webpack in a watch mode, so Webpack will rebuild the bundle on changes
  watch: true
}
