// src/components/RegisterForm.js
import React, { useState } from 'react';

const RegisterForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
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
        required
        type='text'
        placeholder='username'
        name='username'
        value={formData.username}
        onChange={handleChange}
      />
      <input
        required
        type='text'
        placeholder='email'
        name='email'
        value={formData.email}
        onChange={handleChange}
      />
      <input
        required
        type='password'
        placeholder='password'
        name='password'
        value={formData.password}
        onChange={handleChange}
      />
      <button type='submit'>REGISTER</button>
      <p> Error </p>
    </form>
  );
};

export default RegisterForm;
