import { render, screen } from "@testing-library/react";
import BookingForm from './BookingForm';
import { BookingProvider } from './BookingContext';
import { MemoryRouter } from 'react-router-dom'; // Import MemoryRouter

test('Renders the BookingForm heading', () => {
  render(
    <MemoryRouter> {/* Wrap the BookingForm with MemoryRouter */}
      <BookingProvider>
        <BookingForm />
      </BookingProvider>
    </MemoryRouter>
  );

  // Check if the <h2> heading with the text "Book Now" is present in the document
  const headingElement = screen.getByRole('heading', { level: 2, name: /book now/i });
  expect(headingElement).toBeInTheDocument();
});
