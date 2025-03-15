const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const path = require('path');

module.exports = {
  entry: './src/index.js', // Точка входа
  output: {
    path: path.resolve(__dirname, 'dist'), // Папка для сборки
    filename: 'bundle.js', // Имя выходного файла
    publicPath: 'http://localhost:8080/',
  },
  mode: 'development', // Режим разработки (можно переключить на 'production')
  plugins: [
    new ModuleFederationPlugin({
      name: 'app1', // Уникальное имя для текущего приложения
      filename: 'remoteEntry.js', // Файл, который будет содержать информацию о доступных модулях
    //  exposes: {
       // './Button': './src/components/Button', // Экспортируемый модуль (локальный путь)
      //  './Header': './src/components/Header', // Еще один пример экспортируемого модуля
   //   },
      shared: {
        react: { singleton: true, requiredVersion: '^18.0.0' }, // Общие зависимости
        'react-dom': { singleton: true, requiredVersion: '^18.0.0' },
      },
      remotes: {
        'auth-microfrontend': 'auth-microfrontend@http://localhost:8081/remoteEntry.js',
        'profile-microfrontend': 'profile-microfrontend@http://localhost:8082/remoteEntry.js',
        },
    }),
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/, // Обрабатываем файлы с расширением .js и .jsx
        exclude: /node_modules/, // Исключаем папку node_modules
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'], // Используем пресеты для обработки JS и JSX
          },
        },
      },
      {
        test: /\.css$/, // Если у вас есть CSS-файлы
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'], // Позволяет импортировать файлы без указания расширения
  },
  devServer: {
    static: path.join(__dirname, 'dist'), // Папка для сервера разработки
    port: 8080, // Порт сервера
    historyApiFallback: true,
  },

};