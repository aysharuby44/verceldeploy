import React, { useEffect } from 'react';
import '../app/star.css'
const Stars = () => {
  useEffect(() => {
    const totalStars = 10; // Number of stars to create
    const container = document.querySelector('.stars-container');

    for (let i = 0; i < totalStars; i++) {
      const star = document.createElement('div');
      star.classList.add('star');

      const size = Math.random() * 10 + 5; // Random size between 5px and 15px
      const topPosition = Math.random() * 100; // Random vertical position
      const leftPosition = Math.random() * 100; // Random horizontal position
      const duration = Math.random() * 1 + 4; // Random animation duration

      star.style.width = `${size}px`;
      star.style.height = `${size}px`;
      star.style.top = `${topPosition}vh`;
      star.style.left = `${leftPosition}vw`;
      star.style.animationDuration = `${duration}s`;

      container.appendChild(star);
    }
  }, []);

  return <div className="stars-container"></div>;
};

export default Stars;
