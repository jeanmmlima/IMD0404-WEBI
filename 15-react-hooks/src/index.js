import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Counter from './components/Counter';

import UserList from './components/examples-useeffect/UserList';
import Example1 from './components/examples-useeffect/Example1';
import Example2 from './components/examples-useeffect/Example2';
import Example3 from './components/examples-useeffect/Example3';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Example1 />
    <Example2 />
    <Example3 />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
