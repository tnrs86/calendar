const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');

const PATHS = path.join(__dirname, '../src');

const prodConfig = {
  devtool: 'eval',
  mode: 'development',
  entry: './src/scripts/index.tsx',
  output: {
    path: PATHS.build,
    publicPath: PATHS.build,
    filename: 'game.js'
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 8080
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
    alias: {
      images: path.resolve(__dirname, 'src/img/'),
    }
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,        
        include: [
          path.resolve(__dirname, 'src/scripts')
        ], 
        use: 'ts-loader'
      },
      {
        test: /\.pug$/,
        use: ['pug-loader']
      },
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader
         ]
      },
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.(jpg|png|gif|svg)$/,
        include: path.resolve(__dirname, 'src/img'),
        loader: 'url-loader',
        options: {
          esModule: false,
        }
      },
      {

        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
      },
    ]
  }, 
  plugins: [
    new MiniCssExtractPlugin({
      filename: "[name].css",
    }),
    new HtmlWebpackPlugin({
      template: './src/pages/page.pug',
      filename: './about/page-1.html',
      inject: true
    })
  ],
};

const serverConfig = {
  mode: 'development',
  entry: './src/scripts/check/extmodule.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'game1.js'
  }
}
module.exports = [ prodConfig ];