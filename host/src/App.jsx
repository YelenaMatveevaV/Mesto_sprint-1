//import ReactDOM from "react-dom/client";
import React, { lazy, Suspense, useState, useEffect }   from "react";
import Main from "./components/Main.js";
/*
import { Route, useHistory, Switch } from "react-router-dom";
import Header from "./components/Header.js";cd 
import Main from "./components/Main.js";
import Footer from "./components/Footer.js";
import PopupWithForm from "./auth-microfrontend/PopupWithForm";
import ImagePopup from "./profile-microfrontend/ImagePopup";
import api from "../utils/api";
import { CurrentUserContext } from "./auth-microfrontend/contexts/CurrentUserContext";
import EditProfilePopup from "./auth-microfrontend/EditProfilePopup";
import EditAvatarPopup from "./auth-microfrontend/EditAvatarPopup";
import AddPlacePopup from "./profile-microfrontend/AddPlacePopup";
import Register from "./auth-microfrontend/Register";
import Login from "./auth-microfrontend/Login";
import InfoTooltip from "./auth-microfrontend/InfoTooltip";
import ProtectedRoute from "./components/ProtectedRoute.js";
import * as auth from "./auth-microfrontend/utils/auth.js";
*/
//import "./index.css";
//import "auth-microfrontend/UsersTestControl";
//import "profile-microfrontend/TasksTestControl";

/*
const UsersTestControl = lazy(() => import('auth-microfrontend/UsersTestControl').catch(() => {
  return { default: () => <div className='error'>Component is not available!</div> };
 })
 );

 const TasksTestControl = lazy(() => import('profile-microfrontend/TasksTestControl').catch(() => {
  return { default: () => <div className='error'>Component is not available!</div> };
  })
  );
  
  

 const App = () => (
  <div className="container">
   <UsersTestControl></UsersTestControl>
   <TasksTestControl></TasksTestControl>
  </div>
  );
  */

  const Login = lazy(() => import('auth-microfrontend/Login').catch(() => {
    return { default: () => <div className='error'>Component is not available!</div> };
   })
   );

   const Register = lazy(() => import('auth-microfrontend/Register').catch(() => {
    return { default: () => <div className='error'>Component is not available!</div> };
   })
   );

   const Card = lazy(() => import('profile-microfrontend/Card').catch(() => {
    return { default: () => <div className='error'>Component is not available!</div> };
   })
   );

  const App = () => {
    const [jwt, setJwt] = useState('');
  
    const handleJwtChange = event => { // Эта функция получает нотификации о событиях изменения jwt
      setJwt(event.detail)
    }
  
    useEffect(() => {
      addEventListener("jwt-change", handleJwtChange); // Этот код добавляет подписку на нотификации о событиях изменения localStorage
      return () => removeEventListener("jwt-change", handleJwtChange) // Этот код удаляет подписку на нотификации о событиях изменения localStorage, когда в ней пропадает необходимость
    }, []);
  
    return <div className="container">
      <header className='App-header'>
          Лабораторная работа по микрофронтендам
      </header>
      <section className='App-content'>
          {jwt ? (
              <>
                  <Suspense>
                    <Register jwt={jwt} />
                  </Suspense>
                  <Suspense>
                    <Main  />
                  </Suspense>
              </>
          ) : (
              <Suspense>
                <Login jwt={jwt}/>
              </Suspense>
          )}
      </section>
    </div>
  };


  

 