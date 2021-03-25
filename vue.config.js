module.exports = {
    // 部署应用包时的基本 URL
    // publicPath: process.env.NODE_ENV === 'production' ? '/' : '/',
    // outputDir: 'dist',
    assetsDir: 'static',
    // webpack-dev-server 相关配置
    devServer: {
        port: 8090,
        proxy: null, // 设置代理
    },
    productionSourceMap: false //打包不生成map文件
}