/**
 * 客户端webpack配置,打包客户端js文件
 */
const path = require('path');

module.exports = {
  mode: 'development',
  // 客户端入口
  entry: './client/index.js',
  // 客户端出口
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public'),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        options: {
          presets: [
            '@babel/preset-react',
            '@babel/preset-env'
          ]
        }
      }
    ]
  }
}
