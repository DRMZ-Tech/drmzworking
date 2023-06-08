import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about-container">
      <div className="content">
        <h2>About Us</h2>
        <p>
          Drmz System Innovations is a registered Pvt. Ltd. Company which provides embedded system and IoT solutions. We aim to provide unique, customized and user-friendly solutions and products in the embedded systems space. We at Drmz, are a team of creative, enthusiastic & focused people.
        </p>
        <p>
          The Company is working on many cutting-edge technologies and related products like the Internet of Things (IoT), Industrial Robotics, Industrial Automation, Home and Office Automation, Demand-side energy management system, Smart wireless modules for IoT, Smart attendance system, Smart Solar power generation management system, etc.
        </p>
      </div>

      <div className="stats">
        <div className="stat">
          <span className="stat-number">65</span>
          <span className="stat-label">Happy Clients Globally</span>
        </div>

        <div className="stat">
          <span className="stat-number">85</span>
          <span className="stat-label">Projects completed across various domains</span>
        </div>

        <div className="stat">
          <span className="stat-number">11</span>
          <span className="stat-label">Years of experience in Embedded Systems and Automation</span>
        </div>

        <div className="stat">
          <span className="stat-number">15</span>
          <span className="stat-label">Awards at both National and International Level</span>
        </div>
      </div>
    </div>
  );
};

export default About;
