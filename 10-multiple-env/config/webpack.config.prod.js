const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')//压缩css文件
const TerserWebpackPlugin = require('terser-webpack-plugin')//压缩js文件

module.exports = {
  output: {
    filename: 'scripts/[name].[contenthash].js',
    publicPath: 'http://localhost:8080/'
  },

  mode: 'production',

  optimization: {
    minimizer: [
      new CssMinimizerPlugin(),
      new TerserWebpackPlugin()
    ]
  },

  performance: {
    hints: false
  }
}