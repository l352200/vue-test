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
    // config.module
    //   .rule('html-rule')
    //   .test(/\.html$/) // 用于匹配特定文件类型的正则表达式
    //   .use('html-loader') // 使用的加载器名称
    //   .loader('html-loader') // 加载器名称，再次声明以确保配置正确加载
    //   .options({ /* 加载器的选项 */ });
    // config.module
    //   .rule('file-rule')
    //   .test(/\.(png|jpe?g|gif)$/i) // 用于匹配特定文件类型的正则表达式
    //   .use('file-loader') // 使用的加载器名称
    //   .loader('file-loader') // 加载器名称，再次声明以确保配置正确加载
    //   .options({ limit: 8192, /* 加载器的选项 */ });

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
