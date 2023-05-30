const path = require('path');
const PORT = process.env.PORT || 8899
function resolve(dir) {
  return path.join(__dirname, dir);
}
var versionCode = "";

// 按时间标记作为版本号
function timestamp() {
  if(!versionCode) {
    let date = new Date();
    let year = date.getFullYear().toString().substring(2);
    let month = date.getMonth() + 1 >= 10 ? date.getMonth() + 1 : "0" + (date.getMonth() + 1);
    let day = date.getDate() >= 10 ? date.getDate() : "0" + date.getDate();
    let hour = date.getHours() >= 10 ? date.getHours() : "0" + date.getHours();
    let minute = date.getMinutes() >= 10 ? date.getMinutes() : "0" + date.getMinutes();
    versionCode = year + "" + month + "" + day + "" + hour + "" + minute + "/";
  }
  return versionCode;
}

module.exports = {
  publicPath: '/',
  assetsDir: 'static',
  outputDir: resolve('dist/' + timestamp()),
  productionSourceMap: false,
  // 关键配置，babel-loader处理node_modules中的文件，不然编译不过
  transpileDependencies: ['element-ui'],
  // transpileDependencies: true,
  chainWebpack: (config) => {
    // 处理浏览器兼容
    // config.entry('main').add('babel-polyfill')
    // 设置目录别名
    config.resolve.alias
      .set("@src", resolve("./src"))
      .set("@", resolve("./src"))
      .set("~", resolve("./src"))
      .set("@assets", resolve("./src/assets"))
    if(process.env.NODE_ENV === 'production') {
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
    open: false,
    proxy: {
      '/api': {
        target: 'http://127.0.0.1:3004',
        changeOrigin: true,
        ws: true,
    // secure: false
      },
      '/wx': {
        target: 'http://localhost:3001',
        changeOrigin: true,
        // secure: false
      }
    }
  },
  css: {
    extract: false,
  },
  lintOnSave: false
}
