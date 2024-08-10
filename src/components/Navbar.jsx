import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faSearch } from '@fortawesome/free-solid-svg-icons';
import { TextField } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import CategoryList from './CategoryList';

const Navbar = () => {
  const [showCategoriesDropdown, setShowCategoriesDropdown] = useState(false);
  const [showProfileDropdown, setShowProfileDropdown] = useState(false);
  const [query, setQuery] = useState('');

  const navigate = useNavigate();

  const toggleCategoriesDropdown = () => {
    setShowCategoriesDropdown(!showCategoriesDropdown);
  };

  const toggleProfileDropdown = () => {
    setShowProfileDropdown(!showProfileDropdown);
  };

  const handleLogout = () => {
    // Handle logout logic
    console.log('Logout clicked');
  };

  const handleSearch = () => {
    if (query.trim()) {
      navigate(`/search?query=${query.trim()}`);
    }
  };

  const categories = [
    { name: 'Art', slug: 'art' },
    { name: 'Science', slug: 'science' },
    { name: 'Technology', slug: 'technology' },
    { name: 'Cinema', slug: 'cinema' },
    { name: 'Design', slug: 'design' },
    { name: 'Food', slug: 'food' },
  ];

  return (
    <div className="navbar">
      <div className="container">
        <div className="logo">
          <Link to="/">
            <img src="path_to_logo" alt="Brand Logo" />
          </Link>
        </div>
        <div className="links">
          <Link className="link" to="/">Home</Link>
          <Link className="link" to="/about">About</Link>
          <Link className="link" to="/contact">Contact</Link>

          {/* Categories Dropdown */}
          <div className="dropdown">
            <button className="dropbtn" onClick={toggleCategoriesDropdown}>
              Categories
            </button>
            {showCategoriesDropdown && (
              <div className="dropdown-content">
                <CategoryList categories={categories} />
              </div>
            )}
          </div>

          {/* Search Bar */}
          <div className="search-bar">
            <TextField
              label="Search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              variant="outlined"
              fullWidth
            />
            <button type="submit" onClick={handleSearch}>
              <FontAwesomeIcon icon={faSearch} />
            </button>
          </div>

          {/* Profile Dropdown */}
          <div className="dropdown">
            <span className="dropbtn" onClick={toggleProfileDropdown}>
              <FontAwesomeIcon icon={faUser} /> John Doe
            </span>
            {showProfileDropdown && (
              <div className="dropdown-content">
                <Link to="/profile">Profile</Link>
                <a href="/" onClick={handleLogout}>Logout</a>
                {/* Additional dropdown items can be added here */}
              </div>
            )}
          </div>

          {/* Write Link */}
          <span className="write">
            <Link className="link" to="/&">Write</Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
