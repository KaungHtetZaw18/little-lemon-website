import React from 'react';
import { useNavigate } from 'react-router-dom';  // Import useNavigate hook from react-router-dom
import '../styles/Hero.css';
import heroImage from '../assets/restauranfood.jpg';

function Hero() {
  const navigate = useNavigate();  // Use the hook to navigate programmatically

  const handleReservationClick = () => {
    navigate('/booking');  // Navigate to the booking page
  };

  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Little Lemon</h1>
        <h2>Chicago</h2>
        <p>We are a family-owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
        <button className="hero-button" onClick={handleReservationClick}>Reserve a Table</button>  {/* Trigger navigation */}
      </div>
      <div className="hero-image-container">
        <img src={heroImage} alt="Delicious food" className="hero-image" />
      </div>
    </section>
  );
}

export default Hero;
