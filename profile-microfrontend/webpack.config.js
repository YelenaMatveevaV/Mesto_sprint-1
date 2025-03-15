const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js', // Точка входа
  output: {
    path: path.resolve(__dirname, 'dist'), // Папка для сборки
    filename: 'bundle.js', // Имя выходного файла
  },
  mode: 'development', // Режим разработки
  module: {
    rules: [
      {
        test: /\.css$/, // Обработка CSS-файлов
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|jpg|gif)$/, // Обработка изображений
        type: 'asset/resource',
      },
      {
        test: /\.js$/, // Обработка JavaScript
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html', // Шаблон HTML
    }),
  ],
  devServer: {
    static: './dist', // Папка для сервера разработки
    port: 8080, // Порт сервера
  },

};