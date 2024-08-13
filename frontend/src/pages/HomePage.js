import React, { useState, useEffect } from 'react';
import './HomePage.css';

const images = [
  "/images/supermarket.jpeg"
];

const HomePage = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prevIndex => (prevIndex + 1) % images.length);
    }, 2500); // Change image every 2.5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="home-page">
      <main>
        <div className="welcome-container">
          <h1 className="welcome-message">Welcome to DOTMART</h1>
          <h1 className="welcome-message">Buy Groceries and essential products from our Store</h1>
        </div>
        <div className="product-slider">
          {images.map((src, index) => (
            <img
              key={index}
              src={src}
              alt={`Product ${index + 1}`}
              className={`product-image ${index === currentIndex ? 'visible' : ''}`}
            />
          ))}
        </div>
      </main>
    </div>
  );
};

export default HomePage;
