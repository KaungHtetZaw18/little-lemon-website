import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // If using React Router for navigation
import '../styles/Nav.css'; // Import CSS for styling
import HamburgerIcon from '../assets/🦆 icon _hamburger menu.svg';
import CloseIcon from '../assets/🦆 icon _hamburger menu.svg';

const Nav = () => {
  const [isMobile, setIsMobile] = useState(false);

  return (
    <nav className={`nav ${isMobile ? 'mobile' : ''}`}>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/menu">Menu</Link></li>
        <li><Link to="/reservations">Reservations</Link></li>
        <li><Link to="/order">Order Online</Link></li>
        <li><Link to="/login">Login</Link></li>
      </ul>
      <button 
        className="mobile-menu-icon" 
        onClick={() => setIsMobile(!isMobile)}
      >
        <img src={isMobile ? CloseIcon : HamburgerIcon} alt="Menu Icon" />
      </button>
    </nav>
  );
};

export default Nav;
