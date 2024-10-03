import menuIcon from '../assets/🦆 icon _hamburger menu_.svg';  // Import your menu dropdown SVG
import React, { useState } from 'react';
import { Link } from 'react-router-dom';  // Import Link from react-router-dom
import '../styles/Header.css';  // Assuming you have a separate CSS file for styling


function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);  // Toggle the menu open/close state
  };

  return (
    <nav className="nav">
      <div className="menu-toggle" onClick={toggleMenu}>
        <img src={menuIcon} alt="Menu" />
      </div>

      <ul className={`nav-list ${isOpen ? 'open' : ''}`}>  {/* Add 'open' class based on state */}
        <li><Link to="/">Home</Link></li>  {/* Home link navigates to homepage */}
        <li><a href="#about">About</a></li>
        <li><a href="#menu">Menu</a></li>
        <li><a href="#reservations">Reservations</a></li>
        <li><a href="#order">Order Online</a></li>
        <li><a href="#login">Login</a></li>
      </ul>
    </nav>
  );
}

export default Nav;
