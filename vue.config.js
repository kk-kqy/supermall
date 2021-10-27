module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        'views': '@/views',
        'components': '@/components',
        'network': '@/network',
        'common': '@/common',
        'assets': '@/assets',
      }
    }
  },
  devServer: {
    overlay: { // 让浏览器 overlay 同时显示警告和错误
      warnings: true,
      errors: true
    },
    host: "localhost",
    port: 8080, // 端口号
    https: false, // https:{type:Boolean}
    open: false, //配置后自动启动浏览器
    hotOnly: true, // 热更新
    // proxy: 'http://localhost:3000'   // 配置跨域处理,只有一个代理
    proxy: { //配置多个代理
        "/api": {
            target: "http://127.0.0.1:3000",
            changeOrigin: true,
            // ws: true,//websocket支持
            secure: false,
            pathRewrite: {
                "^/api": "/"
            }
        }
    }
  }
}
