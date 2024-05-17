import React, { Component } from 'react';
import './CustomForm.css';

class CustomForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      message: ''
    };
  }

  handleChangeName = (event) => {
    this.setState({
      name: event.target.value
    });
  };

  handleChangeEmail = (event) => {
    this.setState({
      email: event.target.value
    });
  };

  handleChangeMessage = (event) => {
    this.setState({
      message: event.target.value
    });
  };

  /* handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  }; */

  handleSubmit = (event) => {
    event.preventDefault();
    alert(`Name: ${this.state.name}\nEmail: ${this.state.email}\nMessage: ${this.state.message}`);
    // Aqui você pode adicionar a lógica para enviar os dados do formulário para um servidor
  };

  render() {
    return (
      <div className="form-container">
        <h2 className="form-title">Contact Us</h2>
        <form className="form" onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name: {this.state.name}</label>
            <input
              type="text"
              id="name"
              name="name"
              value={this.state.name}
              onChange={this.handleChangeName}
              className="form-input"
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email: {this.state.email}</label>
            <input
              type="email"
              id="email"
              name="email"
              value={this.state.email}
              onChange={this.handleChangeEmail}
              className="form-input"
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              value={this.state.message}
              onChange={this.handleChangeMessage}
              className="form-textarea"
            ></textarea>
          </div>
          <button type="submit" className="form-button">Submit</button>
        </form>
      </div>
    );
  }
}

export default CustomForm;
