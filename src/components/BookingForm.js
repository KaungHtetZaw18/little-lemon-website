import React, { useState, useEffect } from 'react';
import { useBookingContext } from './BookingContext';
import { useNavigate } from 'react-router-dom';
import '../styles/booking.css';

const BookingForm = () => {
  const { availableTimes, updateTimes } = useBookingContext();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    guests: 1,
    occasion: '',
    specialRequest: '',
  });
 
  const [errors, setErrors] = useState({});

  useEffect(() => {
    console.log('BookingForm received availableTimes:', availableTimes);
  }, [availableTimes]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));

    if (errors[name]) {
      setErrors(prevErrors => ({
        ...prevErrors,
        [name]: ''
      }));
    }

    if (name === 'date') {
      console.log('Date changed in BookingForm:', value);
      updateTimes(value);
    }
  };

  const validateForm = () => {
    let tempErrors = {};
    if (!formData.name.trim()) tempErrors.name = "Name is required";
    if (!formData.email.trim()) tempErrors.email = "Email is required";
    if (!formData.phone.trim()) tempErrors.phone = "Phone number is required";
    if (!formData.date) tempErrors.date = "Date is required";
    if (!formData.time) tempErrors.time = "Time is required";
    if (formData.guests < 1) tempErrors.guests = "Number of guests must be at least 1";
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log('Form submitted:', formData);
      // Here you would typically send the data to a server or perform some action
    }
  };

  const handleCancel = () => {
    navigate('/');
  };

  const today = new Date().toISOString().split('T')[0];

  return (
    <div className="booking-container">
      <form onSubmit={handleSubmit}>
        <label>
          Full Name:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            placeholder="John Doe"
          />
          {errors.name && <span className="error-message">{errors.name}</span>}
        </label>

        <label>
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            placeholder="john.doe@example.com"
          />
          {errors.email && <span className="error-message">{errors.email}</span>}
        </label>

        <label>
          Phone Number:
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
            placeholder="123-456-7890"
          />
          {errors.phone && <span className="error-message">{errors.phone}</span>}
        </label>

        <label>
          Date:
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            min={today}
            required
          />
          {errors.date && <span className="error-message">{errors.date}</span>}
        </label>

        <label>
          Time:
          <select
            name="time"
            value={formData.time}
            onChange={handleChange}
            required
          >
            <option value="">Select a time</option>
            {availableTimes.map((time, index) => (
              <option key={index} value={time}>
                {time}
              </option>
            ))}
          </select>
          {errors.time && <span className="error -message">{errors.time}</span>}
        </label>

        <label>
          Number of Guests:
          <input
            type="number"
            name="guests"
            value={formData.guests}
            onChange={handleChange}
            min="1"
            required
          />
          {errors.guests && <span className="error-message">{errors.guests}</span>}
        </label>

        <label>
          Occasion:
          <input
            type="text"
            name="occasion"
            value={formData.occasion}
            onChange={handleChange}
            placeholder="Birthday, Anniversary, etc."
          />
        </label>

        <label>
          Special Requests:
          <textarea
            name="specialRequest"
            value={formData.specialRequest }
            onChange={handleChange}
            placeholder="Any special requests or notes?"
          />
        </label>

        <div className="form-button-group">
          <button className="cancel-button" onClick={handleCancel}>
            Cancel
          </button>
          <button className="submit-button" type="submit">
            Book Now
          </button>
        </div>
      </form>
    </div>
  );
};

export default BookingForm;