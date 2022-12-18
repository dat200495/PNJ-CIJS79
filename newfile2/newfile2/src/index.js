import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ToDo,DoList } from './baitap';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div className='container'>
    <ToDo/>
    <DoList list= "clearn up bedroom"/>
    <DoList list= "buy some milk"/>
    <DoList list= "jogging"/>
    <DoList list= "learn react"/>
    <DoList list= "doing excercises"/>
    </div>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
