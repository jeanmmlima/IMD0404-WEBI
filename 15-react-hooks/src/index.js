import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';


import UserList from './components/examples-useeffect/UserList';
import Counter from './components/Counter';
import MyApp1 from './components/MyApp1/MyApp';
import MyApp2 from './components/MyApp2/MyApp2';
import FormHook from './components/Forms/FormHook';
import SimpleFormHook from './components/exer/SimpleFormHook';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <SimpleFormHook />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
