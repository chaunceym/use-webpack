# Webpack 练习

所有的 webpack 在 webpack.config.js 中

```js
module.exports={
    //入口文件的配置项
    entry:{},
    //出口文件的配置项
    output:{},
    //模块：例如解读CSS,图片如何转换，压缩
    module:{},
    //插件，用于生产模版和各项功能
    plugins:[],
    //配置webpack开发服务功能
    devServer:{}
}
```

## 启动热更新

先下载 webpack-dev-server, webpack-cli 打开服务器

配置 webpack.config.js

```js
devServer: {
    // 基本目录结构
    contentBase: path.resolve(__dirname,'dist'),
    // 服务器 IP 地址
    host: 'localhost',
    // 是否压缩代码
    compress: true,
    // 端口
    port: 1717
}
```

然后 yarn server 就可以运行成功

## CSS 文件打包

Webpack 在生产环境的一个重要作用就是减少 http 请求数, 把多个 js 文件打包到一个 js 里

打包 CSS 文件, 那就需要 Loaders

>Loaders 是 Webpack 最重要的 功能之一, 通过不同的 Loader 来打包不同文件格式的文件

举个例子: 

1. SASS 打包成 CSS
2. ES6 转为 ES5 及以下兼容代码
3. 可以把 React 中的 jsx 代码转为 JS 代码

所有的 Loader 都需要安装

loader 的配置选项: 

- test: 用于匹配处理文件的扩展名表达式, 这个选项是必须配置的(必选)
- use: loader 的名称(必选)
- include/exclude: 手动添加必须处理的文件或屏蔽不需要处理的文件(必选)
- query: 为 loader 提供额外的设置选项(可选)

## 插件引用

下载 html-webpack-plugin

这个插件为了打包 html 文件, 打包后的 index.html 会自动引入打包后的 js

webpack.config.js 配置

```js
const htmlPlugin = require('html-webpack-plugin')
module.exports = {
  plugins: [
    new htmlPlugin({
      minify: true,
      hash: true,
      template: "./src/index.html"
    })
  ]
}
```


