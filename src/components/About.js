import React from 'react';
import '../styles/About.css';  // Import the CSS file

import image1 from '../assets/Mario and Adrian A.jpg';  // Example image 1
import image2 from '../assets/Mario and Adrian b.jpg';  // Example image 2

function About() {
  return (
    <section className="about-section">
      <div className="about-content">
        <h1>Little Lemon</h1>
        <h2>Chicago</h2>
        <p>
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
          Velit officia consequat duis enim velit mollit. Exercitation veniam
          consequat sunt nostrud amet.
        </p>
        <p>
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
          Velit officia consequat duis enim velit mollit.
        </p>
      </div>
      <div className="about-images">
        {/* Update alt text to be more descriptive */}
        <img src={image1} alt="Mario and Adrian, co-owners of Little Lemon" className="about-image image-1" />
        <img src={image2} alt="The exterior of Little Lemon restaurant" className="about-image image-2" />
      </div>
    </section>
  );
}

export default About;
