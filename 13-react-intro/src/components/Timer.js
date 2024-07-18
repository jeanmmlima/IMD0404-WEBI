import React from 'react';

function Timer(props) {
  const element = (
    <div><h1>Hora: {props.date.toLocaleTimeString()} </h1></div>
  )
  return element;
}

export default Timer;