const { HashedModuleIdsPlugin } = require('webpack')
const CompressionPlugin = require('compression-webpack-plugin')
const isProduction = process.env.NODE_ENV === 'production'

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
    productionSourceMap: false, //打包不生成map文件
    configureWebpack: () => {
        const plugins = []
        if (isProduction) {
            //对资源文件进行压缩
            const productionGzipExtensions = /\.(js|css|json|txt|html|ico|svg)(\?.*)?$/i
            plugins.push(
                new CompressionPlugin({
                    filename: "[path].gz[query]", //目标资源名称
                    algorithm: "gzip",
                    test: productionGzipExtensions, //处理所有匹配此 {RegExp} 的资源
                    threshold: 10240,//只处理比这个值大的资源。按字节计算(楼主设置10K以上进行压缩)
                    minRatio: 0.8 //只有压缩率比这个值小的资源才会被处理
                })
            )
            // 用于根据模块的相对路径生成 hash 作为模块 id, 一般用于生产环境
            plugins.push(
                new HashedModuleIdsPlugin()
            )
        }

        return { plugins }
    }
}