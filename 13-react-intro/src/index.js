import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Timer from './Timer';
import TimerClass from './TimerClass';
import Counter from './Counter';
import Toogle from './Toogle';


const root = ReactDOM.createRoot(document.getElementById('root'));



function tick() {
  root.render(
    <Toogle />
  );
}

setInterval(tick, 1000);



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
