// src/pages/RegisterPage.js
import React from 'react';
import { Link } from 'react-router-dom';
import RegisterForm from '../components/RegisterForm';

const RegisterPage = () => {

  const handleRegister = (formData) => {
    // Handle registration logic here
    console.log('Register attempted with', formData);
  };

  return (
    <div className='auth'>
      <h1>Register</h1>
      <RegisterForm onSubmit={handleRegister} />
      <span>
        Do you have an account? <Link to='/['>Login</Link>
      </span>
    </div>
  );
};

export default RegisterPage;
