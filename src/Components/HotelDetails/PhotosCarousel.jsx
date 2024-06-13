import React, { useState, useEffect } from 'react';
import './style.css'; 

export const PhotosCarousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const handlePrevClick = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const handleNextClick = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? prevIndex : prevIndex + 1));
  };

  useEffect(() => {
    if (isAnimating) {
      const timer = setTimeout(() => {
        setIsAnimating(false);
      }, 500); // Match the transition duration in CSS
      return () => clearTimeout(timer);
    }
  }, [isAnimating]);

  return (
    <div className="carousel-container">
      <div className="carousel-wrapper">
        {currentIndex > 0 && (
          <button className="control-arrow control-prev" onClick={handlePrevClick}>
            <div className="arrow-left"></div>
          </button>
        )}
        <div className="carousel-slide-wrapper">
          <div className="carousel-slide" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
            {images.map((image, index) => (
              <div className="carousel-photo-wrapper" key={index}>
                <img className="carousel-photo" src={image.large} alt={`Photo ${index + 1}`} />
              </div>
            ))}
          </div>
        </div>
        {currentIndex < images.length - 1 && (
          <button className="control-arrow control-next" onClick={handleNextClick}>
            <div className="arrow-right"></div>
          </button>
        )}
      </div>
    </div>
  );
};

