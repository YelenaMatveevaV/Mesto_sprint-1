//import ReactDOM from "react-dom/client";
import React, { lazy }  from "react";

import "./index.css";
import "auth-microfrontend/UsersTestControl";
import "profile-microfrontend/TasksTestControl";
/*

const UsersTestControl = lazy(() => import('auth-microfrontend/UsersTestControl').catch(() => {
  return { default: () => <div className='error'>Component is not available!</div> };
 })
 );

 const TasksTestControl = lazy(() => import('profile-microfrontend/TasksTestControl').catch(() => {
  return { default: () => <div className='error'>Component is not available!</div> };
  })
  ); 
  */

 const App = () => (
  <div className="container">
   <UsersTestControl></UsersTestControl>
   <TasksTestControl></TasksTestControl>
  </div>
  ); 

 