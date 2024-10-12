import React from 'react';
import { Link } from 'react-router-dom'; // If using React Router for navigation
import Nav from './Nav';
import '../styles/Header.css'; // Import CSS for styling
import logo from '../assets/Logo.svg';
const Header = () => {
  return (
    <header className="header">
      <div className="logo">
      <Link to="/"><img src={logo} alt="Little Lemon" /></Link>
      </div>
      <Nav />
    </header>
  );
};

export default Header;
