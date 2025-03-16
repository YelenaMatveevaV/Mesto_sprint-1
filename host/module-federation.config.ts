export const mfConfig = {
  name: "profile_microfrontend",
  exposes: {},
  shared: {
    react: {
      singleton: true, // Использовать одну и ту же версию React
      requiredVersion: "^18.0.0", // Укажите минимальную версию React
      eager: false, // Убедитесь, что модуль загружается лениво
    },
    "react-dom": {
      singleton: true, // Использовать одну и ту же версию ReactDOM
      requiredVersion: "^18.0.0", // Укажите минимальную версию ReactDOM
      eager: false, // Убедитесь, что модуль загружается лениво
    },
  },
};