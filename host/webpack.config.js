const path = require('path');

module.exports = {
  entry: './src/index.js', // Точка входа
  output: {
    path: path.resolve(__dirname, 'dist'), // Папка для сборки
    filename: 'bundle.js', // Имя выходного файла
  },
  mode: 'development', // Режим разработки (можно переключить на 'production')
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
    ],
  },
  devServer: {
    static: './dist', // Папка для сервера разработки
    port: 8080, // Порт сервера
  },
};