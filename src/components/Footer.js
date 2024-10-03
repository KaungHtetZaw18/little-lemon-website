import React from 'react';
import '../styles/Footer.css';
import logo from '../assets/Logo.svg';  // Assuming you have a logo

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-logo">
        <img src={logo} alt="Little Lemon Logo" />
      </div>
      <div className="footer-nav">
        <h3>Doormat Navigation</h3>
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#menu">Menu</a></li>
          <li><a href="#reservations">Reservations</a></li>
          <li><a href="#order">Order Online</a></li>
          <li><a href="#login">Login</a></li>
        </ul>
      </div>
      <div className="footer-contact">
        <h3>Contact</h3>
        <p>123 Main Street</p>
        <p>Phone: (555) 555-5555</p>
        <p>Email: info@littlelemon.com</p>
      </div>
      <div className="footer-social">
        <h3>Social Media Links</h3>
        <p>Facebook</p>
        <p>Twitter</p>
        <p>Instagram</p>
      </div>
    </footer>
  );
}

export default Footer;
