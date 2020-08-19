import webpack from 'webpack';
import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';

export default {
  debug: true,
  devtool: 'source-map',
  noInfo: false,
  entry: {
    vendor: path.resolve(__dirname, 'src/vendor'),
    main:path.resolve(__dirname, 'src/index')
  },
  target: 'web',
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
    filename: '[name].js'
  },
  plugins: [

    //Use CommonsChunkPlgin to create a separate bundle/chunk of the vendor libraries s that they are cached separately
    //should correspond to the first key in the entry object in this file
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor'
    }),

    // Generates a HTML File dynamically that includes reference to created bundle JS
    new HtmlWebpackPlugin({
      template: 'src/index.html', //uses user defined html as template
      minify:{ // minify generated html
        removeComments: true,
        collapseWhitespace: true,
        removeRedundantAttributes: true,
        useShortDoctype: true,
        removeEmptyAttributes: true,
        removeStyleLinkTypeAttributes: true,
        keepClosingSlash: true,
        minifyJS: true,
        minifyCSS: true,
        minifyURLs: true
      },
      inject: true //inject script tags dynamically
    }),

    //Eliminate duplicate packages when generating bundle
    new  webpack.optimize.DedupePlugin(),

    //Minify JS
    new webpack.optimize.UglifyJsPlugin()
  ],
  module: {
    loaders: [
      {test: /\.js$/, exclude: /node_modules/, loaders: ['babel']},
      {test: /\.css$/, loaders: ['style','css']}
    ]
  }
}
