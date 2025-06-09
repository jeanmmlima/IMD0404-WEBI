import React, { useState } from 'react';
import './SimpleFormHook.css';

const SimpleFormHook = () => {
  // Estados separados para cada campo do formulário
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleNameInput = (event) => {
    setName(event.target.value);
  }

  const handleEmailInput = (event) => {
    setEmail(event.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = {
      name,
      email,
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
            className="form-input"
            value={name}
            onChange={handleNameInput}

          />
          <p className='form-validation'>{`Name: ${name}`}</p>
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            className="form-input"
            value={email}
            onChange={handleEmailInput}

          />
          <p className='form-validation'>{`Email: ${email}`}</p>
        </div>
        
        <button type="submit" className="form-button">Submit</button>
      </form>
    </div>
  );
};

export default SimpleFormHook;
