import React, { Profiler } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import MyButton from './basic/MyButton';
import MyApp1 from './basic/MyApp1';
import Profile from './basic/Profile';
import Toogle from './components/Toogle';


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <Profile />
);



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
