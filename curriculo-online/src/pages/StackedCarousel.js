import React, { useState, useEffect } from 'react';
import './StackedCarousel.css'; // Importamos o CSS separado

const images = [
  'https://picsum.photos/id/1015/500/300',
  'https://picsum.photos/id/1015/500/300',
  process.env.PUBLIC_URL + '/image.png',
  'https://picsum.photos/id/1015/500/300',
  'https://picsum.photos/id/1015/500/300',
];
const links = [
  '#',
  '#',
  'https://l3l4ck561.github.io/CalculadoraTest2/',
  '#',
  '#',
];

const StackedCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(2);

  const getTransform = (offset) => {
    const baseOffset = 100;
    const baseScale = 0.1;
    const baseRotate = 10;
    const x = offset * baseOffset;
    const scale = 1 - Math.abs(offset) * baseScale;
    const rotate = offset * baseRotate;
    return `translateX(${x}px) scale(${scale}) rotateY(${rotate}deg)`;
  };

  const getOpacity = (offset) => {
    return 1 - Math.abs(offset) * 0.2;
  };

  const moveCarousel = (direction) => {
    setCurrentIndex((prevIndex) => (prevIndex + direction + images.length) % images.length);
  };

  return (
    <div className="carousel-wrapper">
      <div className="carousel-stacked">
        {images.map((src, index) => {
          const offset = index - currentIndex;
          const adjustedOffset = ((offset + images.length + 2) % images.length) - 2;

          if (Math.abs(adjustedOffset) > 2) {
            return null; // só mostra 5 imagens
          }

          return (
            <div data-bs-ride="carousel"
              key={index}
              className={`carousel-card ${adjustedOffset === 0 ? 'active' : ''}`}
              style={{
                transform: getTransform(adjustedOffset),
                opacity: getOpacity(adjustedOffset),
                zIndex: adjustedOffset === 0 ? 10 : 10 - Math.abs(adjustedOffset),
                visibility: 'visible',
              }}
            >
              <a href={links[index]} target="_blank"><img src={src} alt={`Slide ${index}`} /></a>
            </div>
          );
        })}
      </div>

      <button className="btn-control btn-prev" onClick={() => moveCarousel(-1)}>❮</button>
      <button className="btn-control btn-next" onClick={() => moveCarousel(1)}>❯</button>
    </div>
  );
};

export default StackedCarousel;
