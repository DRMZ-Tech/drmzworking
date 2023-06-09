import React, { useEffect, useRef } from 'react';
import './MarqueeSlider.css';

const MarqueeSlider = ({ images, speed }) => {
  const marqueeRef = useRef(null);

  useEffect(() => {
    const marqueeElement = marqueeRef.current;
    let animationId;

    const startMarquee = () => {
      animationId = requestAnimationFrame(step);
    };

    const step = () => {
      if (marqueeElement.scrollLeft >= marqueeElement.scrollWidth) {
        marqueeElement.scrollLeft = 0;
      } else {
        marqueeElement.scrollLeft += 1;
      }
      animationId = requestAnimationFrame(step);
    };

    startMarquee();

    return () => {
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <div className="marquee-slider">
      <div className="marquee" ref={marqueeRef}>
        {images.map((image, index) => (
          <img src={image} alt={`Image ${index}`} key={index} />
        ))}
      </div>
    </div>
  );
};

export default MarqueeSlider;
