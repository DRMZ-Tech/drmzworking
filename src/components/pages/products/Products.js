import React, { useState } from 'react';

const Product = ({ images }) => {
  const [currentImage, setCurrentImage] = useState(images[0]);
  const [isZoomed, setIsZoomed] = useState(false);

  const handleImageClick = image => {
    setCurrentImage(image);
  };

  const handleZoomToggle = () => {
    setIsZoomed(prevState => !prevState);
  };

  const handlePrevImage = () => {
    const currentIndex = images.findIndex(image => image.id === currentImage.id);
    const prevIndex = currentIndex === 0 ? images.length - 1 : currentIndex - 1;
    setCurrentImage(images[prevIndex]);
  };

  const handleNextImage = () => {
    const currentIndex = images.findIndex(image => image.id === currentImage.id);
    const nextIndex = currentIndex === images.length - 1 ? 0 : currentIndex + 1;
    setCurrentImage(images[nextIndex]);
  };

  return (
    <div className="product-gallery">
      <div className={`main-image ${isZoomed ? 'zoomed' : ''}`}>
        <img src={currentImage.src} alt={currentImage.alt} />
        {!isZoomed && (
          <div className="zoom-toggle" onClick={handleZoomToggle}>
            Zoom
          </div>
        )}
      </div>
      <div className="thumbnail-images">
        <div className="arrow left" onClick={handlePrevImage}></div>
        {images.map(image => (
          <img
            key={image.id}
            src={image.src}
            alt={image.alt}
            className={currentImage.id === image.id ? 'active' : ''}
            onClick={() => handleImageClick(image)}
          />
        ))}
        <div className="arrow right" onClick={handleNextImage}></div>
      </div>
      {currentImage.caption && (
        <div className="caption">
          <p>{currentImage.caption}</p>
        </div>
      )}
    </div>
  );
};

export default Product;

