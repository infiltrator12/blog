import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import axios from 'axios'; 

export const Login = () => {
  const [inputs, setInputs] = useState({
    username: '',
    password: '',
  });

  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://127.0.0.1:8800/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(inputs),
      });

      const data = await response.json();

      if (data.error) {
        setError(data.error);
      } else {
        document.cookie = `access_token=${data}`;
        console.log(data);
        setError(null); // Reset error on successful login
        navigate("/");
      }
    } catch (err) {
      setError(err.message);
    }
  };


  return (
    <div className='auth'>
      <h1>LOGIN</h1>
      <form>
        <input type='text' placeholder='username' name='username' onChange={handleChange} />
        <input type='password' placeholder='password' name='password' onChange={handleChange} />
        <button onClick={handleSubmit}>LOGIN</button>
        <span id='error' style={{ color: 'red' }}>
          {error && <p>{error}</p>}
        </span>
        <span>
          Don't you have an account? <Link to='/register'>Register</Link>
        </span>
      </form>
    </div>
  );
};



export const Logout = async () => {
  try {
    // Send the logout request to the server
    const response = await axios.post('http://127.0.0.1:8800/api/auth/logout');
    
    // Clear all cookies
    document.cookie = ''; // Simply setting document.cookie to an empty string clears all cookies

    // Redirect the user to the login page if needed
    window.location.href = '/login'; // Uncomment this line if you want to redirect the user to the login page after logout
  } catch (error) {
    console.error('Logout error:', error);
  }
};

