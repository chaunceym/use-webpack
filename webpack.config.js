const path = require('path')

module.exports = {
  entry: {
    entry: './src/entry.js',
    entry2: './src/entry2.js'
  },
  output: {
    path: path.resolve(__dirname,'dist'),
    filename: "[name].js"
  },
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