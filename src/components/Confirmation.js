import React from 'react';
import Footer from './Footer';
import Header from './Header';
import '../styles/confirmation.css';

const Confirmation = ({ formData }) => {
  return (
    <div className="confirmation-page">
      <Header />
      <div className="confirmation-header">
        <h1>Booking Confirmation</h1>
        <p>
          Thank you for booking a table at Little Lemon Restaurant. We look forward to serving you!
        </p>
      </div>

      <div className="confirmation-container">
        <h2>Booking Details:</h2>
        <ul>
          <li>
            <strong>Name:</strong> {formData.name}
          </li>
          <li>
            <strong>Email:</strong> {formData.email}
          </li>
          <li>
            <strong>Phone Number:</strong> {formData.phone}
          </li>
          <li>
            <strong>Date:</strong> {formData.date}
          </li>
          <li>
            <strong>Time:</strong> {formData.time}
          </li>
          <li>
            <strong>Number of Guests:</strong> {formData.guests}
          </li>
          <li>
            <strong>Occasion:</strong> {formData.occasion}
          </li>
          <li>
            <strong>Special Requests:</strong> {formData.specialRequest}
          </li>
        </ul>
      </div>
      <Footer />
    </div>
  );
};

export default Confirmation;