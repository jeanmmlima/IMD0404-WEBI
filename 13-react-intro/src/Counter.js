import React, { Component } from 'react';

class Counter extends Component {
  constructor(props) {
    super(props);
    // Define o estado inicial
    this.state = {
      count: 0
    };
  }

  incrementCount = () => {
    this.setState(prevState => ({
      count: prevState.count + 1
    }));
  }
  
  render() {
    return (
      <div>
        <p>Contagem: {this.state.count}</p>
        <button onClick={this.incrementCount}>Incrementar</button>
      </div>
    );
  }
}

export default Counter;
