import React, { Profiler } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import MyApp from './basic/MyApp';
import Profile from './basic/Profile';
import Greetings from './basic/Greeting';
import ShoppingList from './basic/ShppingList';
import HelloWorld from './basic/HelloWorld';


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  //<App />
  //<HelloWorld />
  //<Greetings />
  //<MyApp />
  //<Profile />
  <ShoppingList />
);



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
