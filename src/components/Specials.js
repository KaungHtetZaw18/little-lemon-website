import React from 'react';
import '../styles/Specials.css';
import greekSalad from '../assets/greek salad.jpg';
import bruschetta from '../assets/bruchetta.svg';
import lemonDessert from '../assets/lemon dessert.jpg';
import deliveryIcon from '../assets/delivery.svg'; // Import your custom SVG icon

const specialsData = [
  {
    title: 'Greek Salad',
    price: '$12.99',
    description: 'The famous Greek salad of crispy lettuce, peppers, olives and Chicago style feta cheese.',
    image: greekSalad,
  },
  {
    title: 'Bruschetta',
    price: '$5.99',
    description: 'Our Bruschetta is made from grilled bread smeared with garlic and olive oil.',
    image: bruschetta,
  },
  {
    title: 'Lemon Dessert',
    price: '$5.00',
    description: 'This comes straight from grandma’s recipe book with authentic ingredients.',
    image: lemonDessert,
  },
];

function Specials() {
  return (
    <section className="specials">
      <div className="specials-header">
        <h2>This Week's Specials!</h2>
        <button className="online-menu-button">Online Menu</button>
      </div>
      <div className="specials-container">
        {specialsData.map((special, index) => (
          <div key={index} className="special-card">
          <img src={special.image} alt={special.title} className="special-image" />
          <div className="special-info">
            <div className="special-title-price">
              <h3>{special.title}</h3>
              <p className="special-price">{special.price}</p>
            </div>
            <p className="special-description">{special.description}</p>
            <div className="special-order">
              <button className="order-delivery-button">
                Order a delivery
                <img src={deliveryIcon} alt="Delivery icon" className="icon" />
              </button>
            </div>
          </div>
        </div>
        ))}
      </div>
  
    </section>
  );
}

export default Specials;
