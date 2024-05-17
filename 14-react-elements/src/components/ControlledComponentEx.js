import React, { Component } from 'react';

class ControlledComponentEx extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: ''
    };
  }

  handleChange = (event) => {
    this.setState({ inputValue: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    alert(`Submitted value: ${this.state.inputValue}`);
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Input:
          <input
            type="text"
            value={this.state.inputValue}
            onChange={this.handleChange}
          />
        </label>
        <button type="submit">Submit</button>
      </form>
    );
  }
}

export default ControlledComponentEx;
