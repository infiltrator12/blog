import { createContext, useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

// Note: The navigate function should be invoked as a function, not returned as one.
// function useCustomNavigate() {
//     const navigate = useNavigate();
//     return navigate;
// }   

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(JSON.parse(localStorage.getItem('user')) || null);
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  const login = async (inputs) => {


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
        setCurrentUser(data);
        setError(null); // Reset error on successful login
        navigate("/");
      }
    } catch (err) {
      setError(err.message);
    }
  };

  const logout = async () => {
    try {
      await axios.post('http://127.0.0.1:8800/api/auth/logout');
      setCurrentUser(null);
    } catch (error) {
      console.error('Logout error:', error);
    }
  };

  useEffect(() => {
    localStorage.setItem('user', JSON.stringify(currentUser));
  }, [currentUser]);

  return (
    <AuthContextProvider value={{ currentUser, login, logout, error }}>
      {children}
    </AuthContextProvider>
  );
};
