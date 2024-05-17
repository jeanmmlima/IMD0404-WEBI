import React, { Component } from 'react';
import './FormMultipleFields.css';

class FormMultipleFields extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      gender: '',
      subscription: false,
      fruit: '',
      feedback: ''
    };
  }

  handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    this.setState({
      [name]: type === 'checkbox' ? checked : value
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    console.log(this.state);
    alert(`Form Data: ${JSON.stringify(this.state, null, 2)}`);
  };

  render() {
    return (
      <div className="form-container">
        <h2 className="form-title">Personalized Form</h2>
        <form className="form" onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={this.state.name}
              onChange={this.handleChange}
              className="form-input"
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={this.state.email}
              onChange={this.handleChange}
              className="form-input"
            />
          </div>
          <div className="form-group">
            <label>Gender</label>
            <div>
              <label>
                <input
                  type="radio"
                  name="gender"
                  value="male"
                  checked={this.state.gender === 'male'}
                  onChange={this.handleChange}
                  className="form-radio"
                />
                Male
              </label>
              <label>
                <input
                  type="radio"
                  name="gender"
                  value="female"
                  checked={this.state.gender === 'female'}
                  onChange={this.handleChange}
                  className="form-radio"
                />
                Female
              </label>
            </div>
          </div>
          <div className="form-group">
            <label>
              <input
                type="checkbox"
                name="subscription"
                checked={this.state.subscription}
                onChange={this.handleChange}
                className="form-checkbox"
              />
              Subscribe to newsletter
            </label>
          </div>
          <div className="form-group">
            <label htmlFor="fruit">Favorite Fruit</label>
            <select
              id="fruit"
              name="fruit"
              value={this.state.fruit}
              onChange={this.handleChange}
              className="form-select"
            >
              <option value="">Select a fruit</option>
              <option value="apple">Apple</option>
              <option value="banana">Banana</option>
              <option value="orange">Orange</option>
              <option value="grape">Grape</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="feedback">Feedback</label>
            <textarea
              id="feedback"
              name="feedback"
              value={this.state.feedback}
              onChange={this.handleChange}
              className="form-textarea"
            ></textarea>
          </div>
          <button type="submit" className="form-button">Submit</button>
        </form>
      </div>
    );
  }
}

export default FormMultipleFields;
