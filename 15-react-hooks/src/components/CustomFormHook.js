import React, { useState } from 'react';
import './CustomForm.css';

const CustomFormHook = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    gender: '',
    subscription: false,
    fruit: '',
    feedback: ''
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value
    }));
  };

  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: checked
    }));
  };

  const handleRadioChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value
    }));
  };

  const handleSelectChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value
    }));
  };

  const handleTextareaChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value
    }));
  };

 /*  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
  }; */

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
    alert(`Form Data: ${JSON.stringify(formData, null, 2)}`);
  };

  return (
    <div className="form-container">
      <h2 className="form-title">Personalized Form</h2>
      <form className="form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            className="form-input"
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
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
                checked={formData.gender === 'male'}
                onChange={handleRadioChange}
                className="form-radio"
              />
              Male
            </label>
            <label>
              <input
                type="radio"
                name="gender"
                value="female"
                checked={formData.gender === 'female'}
                onChange={handleRadioChange}
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
              checked={formData.subscription}
              onChange={handleCheckboxChange}
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
            value={formData.fruit}
            onChange={handleSelectChange}
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
            value={formData.feedback}
            onChange={handleTextareaChange}
            className="form-textarea"
          ></textarea>
        </div>
        <button type="submit" className="form-button">Submit</button>
      </form>
    </div>
  );
};

export default CustomFormHook;
