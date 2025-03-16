const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js', // Точка входа
  output: {
    path: path.resolve(__dirname, 'dist'), // Папка для сборки
    filename: 'bundle.js', // Имя выходного файла
    publicPath: 'http://localhost:8081/',
  },
  mode: 'development', // Режим разработки (можно переключить на 'production')
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html', // Убедитесь, что файл index.html находится в папке src
    }),
    new ModuleFederationPlugin({
      name: 'app1', // Уникальное имя для текущего приложения
      filename: 'remoteEntry.js', // Файл, который будет содержать информацию о доступных модулях
      exposes: {
        './UsersTestControl': './src/components/UsersTestControl.js',
        './Login': './src/components/Login.js',
        './EditAvatarPopup': './src/components/EditAvatarPopup.js',
        './EditProfilePopup': './src/components/EditProfilePopup.js',
        './InfoTooltip': './src/components/InfoTooltip.js',
        './PopupWithForm': './src/components/PopupWithForm.js',
        './Register': './src/components/Register.js',
        './CurrentUserContext': './src/contexts/CurrentUserContext.js',
      },
      shared: {
        react: { singleton: true, requiredVersion: '^18.0.0' }, // Общие зависимости
        'react-dom': { singleton: true, requiredVersion: '^18.0.0' },
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
        test: /\.svg$/, // Обработка SVG-файлов
        use: ['@svgr/webpack'], // Преобразует SVG в React-компоненты
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
    port: 8081, // Порт сервера
    historyApiFallback: true,
  },

};