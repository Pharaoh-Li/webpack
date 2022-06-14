const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')//合并css文件
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')//压缩css文件
const toml = require('toml')
const yaml = require('yaml')
const json5 = require('json5')

module.exports = {
  // entry: './src/index.js',
  entry: {
    index: './src/index.js',
    another: './src/another-module.js'
  },
  // entry: {
  //   index: {
  //     import: './src/index',
  //     dependOn: 'shared'
  //   },
  //   another: {
  //     import: './src/index',
  //     dependOn: 'shared'
  //   },
  //   shared: 'lodash'
  // },

  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, './dist'),
    clean: true,
    // assetModuleFilename: './images/test.png'
    assetModuleFilename: 'images/[contenthash][ext]'
  },

  mode: 'development',

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
      },

      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        type: 'asset/resource',
        generator: {
          filename: 'wofffont/[contenthash][ext]'
        }
      },

      {
        test: /\.(csv|tsv)$/,
        use: 'csv-loader'
      },

      {
        test: /\.xml$/,
        use: 'xml-loader'
      },

      {
        test: /\.toml$/,
        type: 'json',
        parser: {
          parse: toml.parse
        }
      },

      {
        test: /\.yaml$/,
        type: 'json',
        parser: {
          parse: yaml.parse
        }
      },

      {
        test: /\.json5$/,
        type: 'json',
        parser: {
          parse: json5.parse
        }
      },

      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
            plugins: [
              [
                '@babel/plugin-transform-runtime'
              ]
            ]
          }
        }
      }
    ]
  },

  optimization: {
    minimizer: [
      new CssMinimizerPlugin()
    ],
    splitChunks: {
      chunks: 'all'
    }
  }
}