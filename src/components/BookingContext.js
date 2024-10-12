import React, { createContext, useState, useContext } from 'react';

const BookingContext = createContext();

export const useBookingContext = () => useContext(BookingContext);

export const BookingProvider = ({ children }) => {
  const [availableTimes, setAvailableTimes] = useState(['17:00', '18:00', '19:00', '20:00', '21:00']);

  const updateTimes = (date) => {
    console.log('Date changed:', date);
    // For now, we'll keep the same times regardless of the date
    // In a real application, you might want to fetch available times based on the selected date
    setAvailableTimes(['17:00', '18:00', '19:00', '20:00', '21:00']);
  };

  return (
    <BookingContext.Provider value={{ availableTimes, updateTimes }}>
      {children}
    </BookingContext.Provider>
  );
};