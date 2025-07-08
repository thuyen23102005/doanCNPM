import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import LoginForm from './Component/LoginForm/LoginForm';
import Home from './Component/Home/Home';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <LoginForm />
  </React.StrictMode>
);

