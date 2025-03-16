import React, {useState} from 'react';
//import './UserLogin.css';
import api from '../utils/api'
import '../blocks/login/login.css';

export default function Login () {  // Убрали onLogin из параметров
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleSubmit(e){
    e.preventDefault();
    const userData = {
      email,
      password
    }
    onLogin(userData);
  }

  // Добавили onLogin в UserLogin и отправляем полученный jwt с помощью события
 
  function onLogin(name, password) {
    dispatchEvent(new CustomEvent("jwt-change", {
        detail: api.login(name, password)
    }) );
  }

  return (
    <div className="auth-form">
      <form className="auth-form__form" onSubmit={handleSubmit}>
        <div className="auth-form__wrapper">
          <h3 className="auth-form__title">Вход</h3>
          <label className="auth-form__input">
            <input type="text" name="name" id="email"
              className="auth-form__textfield" placeholder="Email"
              onChange={e => setEmail(e.target.value)} required  />
          </label>
          <label className="auth-form__input">
            <input type="password" name="password" id="password"
              className="auth-form__textfield" placeholder="Пароль"
              onChange={e => setPassword(e.target.value)} required  />
          </label>
        </div>
        <button className="auth-form__button" type="submit">Войти</button>
      </form>
    </div>
  )
};

//export default Login;
