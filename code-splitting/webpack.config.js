var path = require('path');
// var MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  mode: 'none', // production, development, none
  entry: './index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        // use: [
        //     { loader: MiniCssExtractPlugin.loader },
        //     "css-loader"
        //   ]
        use: ['style-loader','css-loader']
        // 둘의 순서가 중요하다.
      },
    ]
  },
//   plugins: [
//     new MiniCssExtractPlugin()
//   ],
}