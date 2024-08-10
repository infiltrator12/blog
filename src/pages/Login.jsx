// src/pages/LoginPage.js
import React from 'react';
import { Link } from 'react-router-dom';
import LoginForm from '../components/LoginForm';

const LoginPage = () => {

  const handleLogin = (formData) => {
    // Handle login logic here
    console.log('Login attempted with', formData);
  };

  return (
    <div className='auth'>
      <h1>LOGIN</h1>
      <LoginForm onSubmit={handleLogin} />
      <span>
        Don't you have an account? <Link to='/*'>Register</Link>
      </span>
    </div>
  );
};

export default LoginPage;
