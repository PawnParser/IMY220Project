// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav style={navStyle}>
      <ul style={ulStyle}>
        <li><Link to="/" style={linkStyle}>Splash</Link></li>
        <li><Link to="/login" style={linkStyle}>Login</Link></li>
        <li><Link to="/home" style={linkStyle}>Home</Link></li>
        <li><Link to="/profile/1" style={linkStyle}>Profile</Link></li>
        <li><Link to="/playlist/1" style={linkStyle}>Playlist</Link></li>
      </ul>
    </nav>
  );
};

const navStyle = {
  fontFamily: 'Arial, sans-serif',
  fontWeight: 'bold',
  lineHeight: '1.2',
  background: '#262626',
  color: 'white',
  padding: '1rem',
  display: 'flex',
  justifyContent: 'center',
};

const ulStyle = {
  listStyleType: 'none',
  margin: 0,
  padding: 0,
  display: 'flex',
  gap: '2rem',
};

const linkStyle = {
  color: 'white', // Make the text white
  textDecoration: 'none', // Remove underline
};

export default Navbar;
