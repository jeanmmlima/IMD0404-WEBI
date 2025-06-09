import React, { useState } from 'react';
import './FormHook.css';

const FormHook = () => {
  // Estados separados para cada campo do formulário
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [gender, setGender] = useState('');
  const [subscription, setSubscription] = useState(false);
  const [fruit, setFruit] = useState('');
  const [feedback, setFeedback] = useState('');

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    if (name === 'name') setName(value);
    if (name === 'email') setEmail(value);
  };

  const handleCheckboxChange = (event) => {
    setSubscription(event.target.checked);
  };

  const handleRadioChange = (event) => {
    setGender(event.target.value);
  };

  const handleSelectChange = (event) => {
    setFruit(event.target.value);
  };

  const handleTextareaChange = (event) => {
    setFeedback(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = {
      name,
      email,
      gender,
      subscription,
      fruit,
      feedback
    };
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
            value={name}
            onChange={handleInputChange}
            className="form-input"
          />
          <p className='form-validation'>{`Name: ${name}`}</p>
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={handleInputChange}
            className="form-input"
          />
          <p className='form-validation'>{`Email: ${email}`}</p>
        </div>
        <div className="form-group">
          <label>Gender</label>
          <div>
            <label>
              <input
                type="radio"
                name="gender"
                value="male"
                checked={gender === 'male'}
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
                checked={gender === 'female'}
                onChange={handleRadioChange}
                className="form-radio"
              />
              Female
            </label>
          </div>
          <p className='form-validation'>{`Gender: ${gender}`}</p>
        </div>
        <div className="form-group">
          <label>
            <input
              type="checkbox"
              name="subscription"
              checked={subscription}
              onChange={handleCheckboxChange}
              className="form-checkbox"
            />
            Subscribe to newsletter
          </label>
          <p className='form-validation'>{`Subscription: ${subscription ? 'yes' : 'no'}`}</p>
        </div>
        <div className="form-group">
          <label htmlFor="fruit">Favorite Fruit</label>
          <select
            id="fruit"
            name="fruit"
            value={fruit}
            onChange={handleSelectChange}
            className="form-select"
          >
            <option value="">Select a fruit</option>
            <option value="apple">Apple</option>
            <option value="banana">Banana</option>
            <option value="orange">Orange</option>
            <option value="grape">Grape</option>
          </select>
          <p className='form-validation'>{`Fruit: ${fruit}`}</p>
        </div>
        <div className="form-group">
          <label htmlFor="feedback">Feedback</label>
          <textarea
            id="feedback"
            name="feedback"
            value={feedback}
            onChange={handleTextareaChange}
            className="form-textarea"
          ></textarea>
          <p className='form-validation'>{`Feedback: ${feedback}`}</p>
        </div>
        <button type="submit" className="form-button">Submit</button>
      </form>
    </div>
  );
};

export default FormHook;
