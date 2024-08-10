// src/components/LoginForm.js
import React, { useState } from 'react';

const LoginForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type='text'
        placeholder='username'
        name='username'
        value={formData.username}
        onChange={handleChange}
      />
      <input
        type='password'
        placeholder='password'
        name='password'
        value={formData.password}
        onChange={handleChange}
      />
      <button type='submit'>LOGIN</button>
      <span id='error' style={{ color: 'red' }}>
        <p>Error!!</p>
      </span>
    </form>
  );
};

export default LoginForm;
