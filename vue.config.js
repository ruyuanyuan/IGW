module.exports = {
  publicPath: './',
  outputDir: 'dist',
  lintOnSave: true,
  productionSourceMap: false,
  devServer: {
    open: true,
    host: '0.0.0.0',
    // host: '192.168.0.105',
    port: 3000,
    https: false,
    hotOnly: false,
    // proxy: {
    //   '/': {
    //     target: 'http://www.wolfs.xin',   //代理接口
    //     ws: true,
    //     // 将主机标头的原点更改为目标URL
    //     changeOrigin: true,
    //   }
    // },
    before: (app) => {
    },
  }
};
