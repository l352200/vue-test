const path = require('path');
const PORT = process.env.PORT || 8899
function resolve(dir) {
  return path.join(__dirname, dir);
}

module.exports = {
  transpileDependencies: true,
  chainWebpack: (config) => {
    // 处理浏览器兼容
    config.entry('main').add('babel-polyfill')
    // 设置目录别名
    config.resolve.alias
        .set("@src", resolve("./src"))
        .set("@", resolve("./src"))
        .set("~", resolve("./src"))
        .set("@assets", resolve("./src/assets"))
    if (process.env.NODE_ENV === 'production') {
        // 依赖分析
        // config.plugin('webpack-bundle-analyzer')
        //         .use(BundleAnalyzerPlugin)
        config.plugins.delete('prefetch');
        // 移除 preload 插件, 加快首次加载速度
        config.plugins.delete('preload');
    }
},
  devServer: { // 自定义服务配置
    port: PORT, // 修改的端口号
    open: true
  },
  // lintOnSave:false
}
