import React, { useState } from 'react';
import Header from './Header';  // Ensure the paths are correct
import Footer from './Footer';
import { useNavigate } from 'react-router-dom';  // To handle navigation
import '../styles/booking.css';  // Ensure the path to Booking.css is correct

function BookingForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    occasion: '',
    guests: '',
    date: '',
    time: '',
  });

  const availableTimes = ['17:00', '18:00', '19:00', '20:00', '21:00'];
  const occasions = ['Birthday', 'Anniversary', 'Wedding', 'Corporate Event', 'Casual Dining', 'Graduation', 'Family Gathering', 'Others'];

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const handleCancel = () => {
    navigate('/');  // Redirect to homepage
  };

  const getTodayDate = () => {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const day = String(today.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  };

  return (
    <div className="booking-content">
      <form onSubmit={handleSubmit} className="transparent-booking-form">
        <h2>Reserve a Table</h2>

        <div className="form-group">
          <label htmlFor="name">Full Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your name"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="phone">Telephone</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
            placeholder="123-456-7890"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="occasion">Occasion (optional)</label>
          <select
            id="occasion"
            name="occasion"
            value={formData.occasion}
            onChange={handleChange}
          >
            <option value="">Select occasion</option>
            {occasions.map((occasion) => (
              <option key={occasion} value={occasion}>
                {occasion}
              </option>
            ))}
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="guests">Guests</label>
          <input
            type="number"
            id="guests"
            name="guests"
            value={formData.guests}
            onChange={handleChange}
            min="1"
            max="10"
            placeholder="Number of guests"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="date">Date</label>
          <input
            type="date"
            id="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            min={getTodayDate()}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="time">Time</label>
          <select
            id="time"
            name="time"
            value={formData.time}
            onChange={handleChange}
            required
          >
            <option value="">Select time</option>
            {availableTimes.map((time) => (
              <option key={time} value={time}>
                {time}
              </option>
            ))}
          </select>
        </div>

        <div className="form-buttons">
          <button type="button" className="modern-cancel-btn" onClick={handleCancel}>Cancel</button>
          <button type="submit" className="modern-submit-btn">Reserve</button>
        </div>
      </form>
    </div>
  );
}

function BookingPage() {
  return (
    <>
      <Header />
      <div className="booking-wrapper">
        <div className="booking-text">
          <h2>Experience the Perfect Balance of Tradition and Luxury</h2>
          <p>
            At Little Lemon, we take pride in providing our customers with the most luxurious experience.
            Book a table to share in this experience.
          </p>
        </div>
        <BookingForm />
      </div>
      <Footer />
    </>
  );
}

export default BookingPage;
