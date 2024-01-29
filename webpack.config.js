const path = require('path');

module.exports = {
  entry: './src/index.js', // 프로젝트의 진입점 파일 경로로 수정
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
    ],
  },
};