const CracoLessPlugin = require('craco-less')
const CracoAlias = require('craco-alias')
const SimpleProgressWebpackPlugin = require('simple-progress-webpack-plugin')

module.exports = {
  publicPath: './',
  devServer: {
    public: '0.0.0.0:8090',
    port: 8090 // 端口号
  },
  plugins: [
    {
      plugin: CracoAlias,
      options: {
        source: 'options',
        baseUrl: './',
        aliases: {
          '@': './src'
        }
      }
    },
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: { '@primary-color': '#1DA57A' },
            javascriptEnabled: true
          }
        }
      }
    }
  ],
  webpack: {
    plugins: [
      new SimpleProgressWebpackPlugin()
    ]
    // module: {
    //   rules: [
    //     {
    //       test: /\.jpg|png|gif|bmp|jpeg$/,
    //       use: [
    //         {
    //           loader: 'url-loader',
    //           options: {
    //             limit: 10240,
    //             name: '[name].[ext]',
    //             esModule: false
    //           }
    //         }
    //       ]
    //     }
    //   ]
    // }
  },
  babel: {
    // 支持装饰器模式语法
    plugins: [
      ['@babel/plugin-proposal-decorators', { legacy: true }]
    ]
  }
}
