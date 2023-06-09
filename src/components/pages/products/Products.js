import React from 'react';
import './Products.css';

class ImageGallery extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      images: [
        'five.jpg',
        'four.jpg',
        'three.jpg',
        'Two.jpg',
        'six.jpg',
      ],
      activeIndex: 0,
    };
  }

  handleClick = (index) => {
    this.setState({ activeIndex: index });
  };

  render() {
    const { images, activeIndex } = this.state;

    return (<>
        <h1>____Gallery____</h1>
      <div className="image-gallery">
        <div className="gallery-container">
          {images.map((image, index) => (
            <div
              key={index}
              className={`gallery-image ${
                activeIndex === index ? 'active' : ''
              }`}
              onClick={() => this.handleClick(index)}
            >
              <img src={image} alt={`Image ${index}`} />
            </div>
          ))}
        </div>
      </div>
      </>
    );
  }
}

export default ImageGallery;
