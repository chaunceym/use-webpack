const path = require('path')
const htmlPlugin = require('html-webpack-plugin')
module.exports = {
  entry: {
    // 入口文件
    entry: './src/entry.js',
    entry2: './src/entry2.js',
  },
  output: {
    // 出口文件
    path: path.resolve(__dirname,'dist'),
    filename: "[name].js"
  },
  module: {
    rules: [
      {
        test: /\.css$/, // 以 css 结尾
        use: ['style-loader','css-loader']
      }
    ]
  },
  plugins: [
    new htmlPlugin({
      minify: true,
      hash: true,
      template: "./src/index.html"
    })
  ],
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
}