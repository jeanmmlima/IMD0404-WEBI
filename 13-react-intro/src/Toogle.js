import React from 'react';
class Toogle extends React.Component {

    constructor(props) {
      super(props)
      this.state = { isToogleOn: false }
      this.handleClick = this.handleClick.bind(this)
    }
  
    handleClick() {
      this.setState(prevState => ({
        isToogleOn: !prevState.isToogleOn
      }))
    }
  
    render() {
      return (
        <button onClick={this.handleClick}>
          {this.state.isToogleOn ? 'ON' : 'OFF'}
        </button>
      );
    }
  }

  export default Toogle;