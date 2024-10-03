import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';  // Import React Router components
import Header from './components/Header';  // Ensure these paths are correct
import Hero from './components/Hero';
import Specials from './components/Specials';
import Testimonials from './components/Testimonials';
import About from './components/About';
import Footer from './components/Footer';
import BookingPage from './components/BookingPage';  // Your BookingPage component
import './App.css';  // Ensure this path is correct

function HomePage() {
  return (
    <>
      <Header />
      {/* Add id to each section to enable scrolling */}
      <div id="hero">
        <Hero />
      </div>
      <div id="specials">
        <Specials />
      </div>
      <div id="testimonials">
        <Testimonials />
      </div>
      <div id="about">
        <About />
      </div>
      <Footer />
    </>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        {/* Home Page route */}
        <Route path="/" element={<HomePage />} />
        
        {/* Booking Page route */}
        <Route path="/booking" element={<BookingPage />} />
      </Routes>
    </Router>
  );
}

export default App;
