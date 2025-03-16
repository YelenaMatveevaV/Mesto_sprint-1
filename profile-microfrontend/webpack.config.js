const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js', // Точка входа
  output: {
    path: path.resolve(__dirname, 'dist'), // Папка для сборки
    filename: 'bundle.js', // Имя выходного файла
    publicPath: 'http://localhost:8083/',
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
        test: /\.(js|jsx)$/, // Обработка JavaScript
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'], // Используем пресеты для обработки JS и JSX
          },
        },
      },
    ],
  },

  resolve: {
    extensions: ['.js', '.jsx'], // Позволяет импортировать файлы без указания расширения
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html', // Шаблон HTML
    }),
    new ModuleFederationPlugin({
      name: 'app1', // Уникальное имя для текущего приложения
      filename: 'remoteEntry.js', // Файл, который будет содержать информацию о доступных модулях
      exposes: {
        './TasksTestControl': './src/components/TasksTestControl.js',
        './AddPlacePopup': './src/components/AddPlacePopup.js',
        './Card': './src/components/Card.js',
        './ImagePopup': './src/components/ImagePopup.js',
        './PopupWithForm': './src/components/PopupWithForm.js',
      },
      shared: {
        react: { 
          singleton: true, 
          requiredVersion: false //'^18.0.0' 
        }, // Общие зависимости
        'react-dom': { 
          singleton: true, 
          requiredVersion: false //'^18.0.0' 
        },
      },
    }),
  ],

  devServer: {
    static: path.join(__dirname, 'dist'), // Папка для сервера разработки
    port: 8083, // Порт сервера
    historyApiFallback: true,
  },

};