import { render } from "@testing-library/react";
import { BookingProvider, useBookingContext } from './BookingContext';
import React from 'react';

// A test component to use the context
const TestComponent = ({ newDate }) => {
  const { availableTimes, updateTimes } = useBookingContext();
  if (newDate) {
    updateTimes(newDate); // Simulate date change if newDate is passed
  }
  return <div>{availableTimes.join(', ')}</div>;
};

test('BookingProvider initializes availableTimes correctly', () => {
  const { getByText } = render(
    <BookingProvider>
      <TestComponent />
    </BookingProvider>
  );
  // Check that the initial available times are correctly set
  expect(getByText('17:00, 18:00, 19:00, 20:00, 21:00')).toBeInTheDocument();
});

test('updateTimes maintains the same available times after date change', () => {
  const { getByText } = render(
    <BookingProvider>
      <TestComponent newDate="2024-12-25" /> {/* Simulate a date change */}
    </BookingProvider>
  );
  // Check that the available times remain the same after date change
  expect(getByText('17:00, 18:00, 19:00, 20:00, 21:00')).toBeInTheDocument();
});
