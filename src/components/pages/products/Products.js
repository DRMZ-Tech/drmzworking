import React, { useState } from 'react';

const Gallery = () => {
  const [viewType, setViewType] = useState('grid');
  const [captions, setCaptions] = useState([]);

  const handleCaptionChange = (index, event) => {
    const newCaptions = [...captions];
    newCaptions[index] = event.target.value;
    setCaptions(newCaptions);
  };

  const products = [
    {
      id: 1,
      name: 'Product 1',
      images: [
        { id: 1, src: 'one.jpg', alt: 'Product 1 - Image 1' },
        { id: 2, src: 'Two.jpg', alt: 'Product 1 - Image 2' },
      ],
    },
    {
      id: 2,
      name: 'Product 2',
      images: [
        { id: 1, src: 'three.jpg', alt: 'Product 2 - Image 1' },
        { id: 2, src: 'four.jpg', alt: 'Product 2 - Image 2' },
        { id: 3, src: 'five.jpg', alt: 'Product 2 - Image 3' },
      ],
    },
    // Add more products as needed
  ];

  return (
    <div className="gallery-container">
      <div className="toggle-buttons">
        <button
          className={`toggle-btn ${viewType === 'grid' ? 'active' : ''}`}
          onClick={() => setViewType('grid')}
        >
          Grid View
        </button>
        <button
          className={`toggle-btn ${viewType === 'list' ? 'active' : ''}`}
          onClick={() => setViewType('list')}
        >
          List View
        </button>
      </div>

      {viewType === 'grid' ? (
        <div className="grid-container">
          {products.map(product => (
            <div key={product.id} className="grid-item">
              <h3>{product.name}</h3>
              {product.images.map(image => (
                <div key={image.id} className="image-container">
                  <img src={image.src} alt={image.alt} className="grid-image" />
                  {/* <textarea
                    className="caption-input"
                    placeholder="Add a caption..."
                    value={captions[image.id - 1] || ''}
                    onChange={event => handleCaptionChange(image.id - 1, event)}
                  /> */}
                </div>
              ))}
            </div>
          ))}
        </div>
      ) : (
        <ul className="list-container">
          {products.map(product => (
            <li key={product.id} className="list-item">
              <h3>{product.name}</h3>
              {product.images.map(image => (
                <div key={image.id} className="image-container">
                  <img src={image.src} alt={image.alt} className="list-image" />
                  {/* <textarea
                    className="caption-input"
                    placeholder="Add a caption..."
                    value={captions[image.id - 1] || ''}
                    onChange={event => handleCaptionChange(image.id - 1, event)}
                  /> */}
                </div>
              ))}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Gallery;
