const CracoLessPlugin = require('craco-less')
const CracoAlias = require('craco-alias')

module.exports = {
  publicPath: './',
  devServer: {
    public: '0.0.0.0:8090',
    port: 8090, // 端口号
    open: false, // 配置自动启动浏览器
    hotOnly: true, // 热更新
    hot: true
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
            modifyVars: { '@primary-color': '#494b74' },
            javascriptEnabled: true
          }
        }
      }
    }
  ],
  babel: {
    // 支持装饰器模式语法
    plugins: [
      ['@babel/plugin-proposal-decorators', { legacy: true }]
    ]
  }
}
