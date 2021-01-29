module.exports = {
    //webpack-dev-server 相关配置
    // outputDir: 'dist',
    assetsDir: 'static',
    devServer: {
        port: 8090,
        proxy: null, // 设置代理
    },
    productionSourceMap: false //打包不生成map文件
}