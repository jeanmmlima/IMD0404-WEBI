import React from 'react';
class Toogle extends React.Component {

    constructor(props) {
      super(props)
      this.state = { 
        isToogleOn: false,
        countChanges: 0
      }
      //this.handleClick = this.handleClick.bind(this)
    }
  
    handleClick = () => {
      this.setState(prevState => ({
        isToogleOn: !prevState.isToogleOn,
        countChanges: prevState.countChanges + 1
      }))
    }
  
    render() {
      return (
        <>
        <label>O estado é: {this.state.isToogleOn ? 'Ligado' : 'Desligado'}</label>
        <br />
        <button onClick={this.handleClick}>
          {this.state.isToogleOn ? 'ON' : 'OFF'}
        </button>
        <br></br>
        <label>Total de vezes que mudou do estado: {this.state.countChanges}</label>
        </>
      );
    }
  }

  export default Toogle;