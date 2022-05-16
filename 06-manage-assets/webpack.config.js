const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')//合并css文件
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')//压缩css文件

module.exports = {
  entry: './src/index.js',

  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, './dist'),
    clean: true,
    // assetModuleFilename: './images/test.png'
    assetModuleFilename: 'images/[contenthash][ext]'
  },

  mode: 'production',

  devtool: 'inline-source-map',

  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html',
      filename: 'app.html',
      inject: 'body'
    }),

    new MiniCssExtractPlugin({
      filename: 'styles/[contenthash].css'
    })
  ],

  devServer: {
    static: './dist'
  },

  module: {
    rules: [
      {
        test: /\.png$/,
        type: 'asset/resource',
        generator: {
          filename: 'images/[contenthash][ext]'
        }
      },

      {
        test: /\.svg$/,
        type: 'asset/inline'
      },

      {
        test: /\.txt$/,
        type: 'asset/source'
      },

      {
        test: /\.jpg/,
        type: 'asset',
        generator: {
          filename: 'images/[contenthash][ext]'
        },
        parser: {
          dataUrlCondition: {
            maxSize: 4 * 1024
          }
        }
      },

      {
        test: /\.(css|less)$/,
        // use: ['style-loader', 'css-loader', 'less-loader']
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'less-loader']
      }
    ]
  },

  optimization: {
    minimizer: [
      new CssMinimizerPlugin()
    ]
  }
}