import React from 'react';
import BookingForm from './BookingForm';
import '../styles/booking.css'; // Ensure you import the CSS file

function BookingPage() {
  return (
    <div className="booking-page"> {/* Add the booking-page class here */}
      <BookingForm />
    </div>
  );
}

export default BookingPage;