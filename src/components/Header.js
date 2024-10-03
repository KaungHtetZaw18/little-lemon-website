import React from 'react';
import Nav from './Nav';  // Import Nav component
import { Link } from 'react-router-dom';  // Import Link from react-router-dom
import '../styles/Header.css';
import logo from '../assets/Logo.svg';

function Header() {
  return (
    <header className="header">
      <div className="header-logo">
        <Link to="/">  {/* Clickable logo that navigates to homepage */}
          <img src={logo} alt="Little Lemon Logo" />
        </Link>
      </div>
      <Nav />  {/* Navbar with Link components */}
    </header>
  );
}

export default Header;
