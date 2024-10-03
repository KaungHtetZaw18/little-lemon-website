import React from 'react';
import '../styles/Testimonials.css';

// Import images from the assets folder
import johnDoeImage from '../assets/john-doe.png';
import janeSmithImage from '../assets/jane-smith.jpg';
import aliceBrownImage from '../assets/alice-brown.jpg';
import michaelJohnsonImage from '../assets/michael-johnson.png';

const testimonialsData = [
  {
    rating: '★★★★☆',
    name: 'John Doe',
    review: 'This is the best Mediterranean food I’ve ever tasted!',
    image: johnDoeImage,
  },
  {
    rating: '★★★★★',
    name: 'Jane Smith',
    review: 'Amazing atmosphere and delicious food. Highly recommended!',
    image: janeSmithImage,
  },
  {
    rating: '★★★★☆',
    name: 'Alice Brown',
    review: 'The Greek salad was super fresh, and the service was excellent.',
    image: aliceBrownImage,
  },
  {
    rating: '★★★★★',
    name: 'Michael Johnson',
    review: 'I love this place! The lemon dessert was absolutely delicious.',
    image: michaelJohnsonImage,
  },
];

function Testimonials() {
  return (
    <section className="testimonials">
      <h2>Testimonials</h2>
      <div className="testimonials-container">
        {testimonialsData.map((testimonial, index) => (
          <div key={index} className="testimonial-card">
            <img 
              src={testimonial.image} 
              alt={testimonial.name} 
              className="testimonial-image" 
            />
            <p className="testimonial-rating">{testimonial.rating}</p>
            <p className="testimonial-name">{testimonial.name}</p>
            <p className="testimonial-review">{testimonial.review}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Testimonials;
