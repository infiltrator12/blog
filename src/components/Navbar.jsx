import React from 'react'
import Logo from "../img/logo.png";
import { Link } from 'react-router-dom'
import { useState } from 'react';
import { useEffect } from 'react';


const Navbar = () => {

   // State to store the username
   const [username, setUsername] = useState('');

   useEffect(() => {
    // Fetch the username from the cookie
    const cookie = document.cookie;
    const usernameCookie = cookie.split(';').find(cookie => cookie.trim().startsWith('username='));
    if (usernameCookie) {
      setUsername(usernameCookie.split('=')[1]);
    }
  }, []);
 
  
  console.log(document.cookie);
  return (
    <div className='navbar'>
      <div className="container">
        <div className="logo">
          <img src={Logo} alt="" />
        </div>
        <div className="links">
          <Link className='link' to="/?cat=art">
            <h6>Art</h6>
          </Link>
          <Link className='link' to="/?cat=science">
            <h6>Science</h6>
          </Link>
          <Link className='link' to="/?cat=technology">
            <h6>Technology</h6>
          </Link>
          <Link className='link' to="/?cat=cinema">
            <h6>Cinema</h6>
          </Link>
          <Link className='link' to="/?cat=design">
            <h6>Design</h6>
          </Link>
          <Link className='link' to="/?cat=food">
            <h6>Food</h6>
          </Link>
          {/* Display the username dynamically */}
          <span>{username}</span>
          <span><a href="/logout">Logout</a></span>
          <span className='write'>
            <Link className='link' to="/write">Write</Link>
          </span>
        </div>
      </div>
    </div>
  )
}

export default Navbar