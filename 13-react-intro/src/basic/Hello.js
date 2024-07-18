import React from 'react';
import ReactDOM from 'react-dom';

function getGreeting(name) {
  const element = <h1>Hello World {name} </h1>;
  return element;

}

function Hello(props){
    return(
        getGreeting(props.name)
    )
  }


export default Hello;