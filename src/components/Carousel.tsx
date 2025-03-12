import React, { useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Product } from '../types';
import { Link } from 'react-router-dom';
import '../css/home.css';

interface CarouselProps {
  products: Product[];
}

const Carousel: React.FC<CarouselProps> = ({ products }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === products.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? products.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(interval);
  }, [currentIndex]);

  if (products.length === 0) {
    return null;
  }

  return (
    <div className="carousel">
      <button 
        className="carousel-control carousel-control-prev" 
        onClick={prevSlide}
        style={{
          position: 'absolute',
          left: '10px',
          top: '50%',
          transform: 'translateY(-50%)',
          zIndex: 10,
          background: 'rgba(255, 255, 255, 0.5)',
          borderRadius: '50%',
          width: '40px',
          height: '40px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          border: 'none',
          cursor: 'pointer'
        }}
      >
        <ChevronLeft size={24} />
      </button>
      
      <div className="carousel-slide">
        <img 
          src={products[currentIndex].mainImage} 
          alt={products[currentIndex].name} 
          className="carousel-image" 
        />
        <div className="carousel-content">
          <h2 className="carousel-title">{products[currentIndex].name}</h2>
          <p className="carousel-price">${products[currentIndex].price}</p>
          <Link to={`/product/${products[currentIndex].id}`} className="btn btn-primary">
              Купить сейчас
          </Link>
        </div>
      </div>
      
      <button 
        className="carousel-control carousel-control-next" 
        onClick={nextSlide}
        style={{
          position: 'absolute',
          right: '10px',
          top: '50%',
          transform: 'translateY(-50%)',
          zIndex: 10,
          background: 'rgba(255, 255, 255, 0.5)',
          borderRadius: '50%',
          width: '40px',
          height: '40px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          border: 'none',
          cursor: 'pointer'
        }}
      >
        <ChevronRight size={24} />
      </button>
      
      <div className="carousel-indicators" style={{
        position: 'absolute',
        bottom: '20px',
        left: '50%',
        transform: 'translateX(-50%)',
        display: 'flex',
        gap: '8px'
      }}>
        {products.map((_, index) => (
          <button
            key={index}
            className={`carousel-indicator ${index === currentIndex ? 'active' : ''}`}
            onClick={() => setCurrentIndex(index)}
            style={{
              width: '10px',
              height: '10px',
              borderRadius: '50%',
              background: index === currentIndex ? 'white' : 'rgba(255, 255, 255, 0.5)',
              border: 'none',
              padding: 0,
              cursor: 'pointer'
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;