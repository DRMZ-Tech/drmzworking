import React from "react";
import "./About.css"; // Import the CSS file

const AboutUs = () => {
  return (
    <section className="about-us" id="about">
      <div className="about-us-content">
        <h2>About Our Organization</h2>
        <p>
          Welcome to our organization! We are dedicated to providing innovative
          solutions in our industry and making a positive impact in the world.
        </p>
        <p>
          Drmz System Innovations is a registered Pvt. Ltd. Company which
          provides embedded system and IoT solutions. We aim to provide unique,
          customized and user friendly solutions and products in the embedded
          systems space. We at Drmz, are a team of creative, enthusiastic &
          focused people.
        </p>
        <p>
          The Company is working on many cutting edge technologies and related
          products like the Internet of things (IoT), Industrial Robotics,
          Industrial Automation, Home and Office Automation, Demand side energy
          management system, Smart wireless modules for IoT, Smart attendance
          system, Smart Solar power generation management system, etc.
        </p>
      </div>

      <div className="social-media">
        <h3>Connect With Us</h3>
        <ul>
          <li>
            <a href="https://www.facebook.com">Facebook</a>
          </li>
          <li>
            <a href="https://www.twitter.com">Twitter</a>
          </li>
          <li>
            <a href="https://www.instagram.com">Instagram</a>
          </li>
        </ul>
      </div>
      <div className="mygal">
        <h1>Image Gallery</h1>
      </div>
      <div className="image-gallery">
        <div className="gallery">
          <img src="one.jpg" alt="Image 1" />
          <img src="Two.jpg" alt="Image 2" />
          <img src="Three.jpg" alt="Image 3" />
        </div>
      </div>

      <div className="products">
        <h1>Our Products</h1>
        <ul className="image">
          <li>
            <img src="six.jpg" alt="Image 1" />
          </li>
          <li>
            <img src="five.jpg" alt="Image 1" />
          </li>
          <li>
            <img src="four.jpg" alt="Image 1" />
          </li>
        </ul>
      </div>
    </section>
  );
};

export default AboutUs;
