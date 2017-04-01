var path = require('path')
var HtmlWebpackPlugin = require('html-webpack-plugin')

function resolve (dir) {
  return path.join(__dirname, dir)
}

module.exports = {
  entry: './app/main.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index_bundle.js'
  },
  // resolve: {
  //   extensions: ['.js', '.json', '.css', '.scss'],
  //   modules: [
  //     resolve('node_modules')
  //   ]
  // },
  module: {
    rules: [{
      test: /\.(js)$/,
      exclude: /node_modules/,
      use: [
        'babel-loader',
      ]
    },{
      test: /\.scss$/,
      use: [{
        loader: 'style-loader'
      }, {
        loader: 'css-loader'
      }, {
        loader: 'sass-loader'
      }]
    }, {
      test: /\.pug$/,
      loader: 'pug-loader'
    },{
      test: /\.css$/,
      loader:'style!css!'
    },{
      test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
      loader: 'url-loader',
    },{
      test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
      loader: 'url-loader',
    }]
  },
  devServer: {
    open: true, // to open the local server in browser
    contentBase: __dirname + '/dist'
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './app/templates/index.pug'
    })
  ]
}
