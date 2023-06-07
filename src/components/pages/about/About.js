import React from "react";
import "../../../App.css";
import "./About.css";
const About = () => {
  return (
    <div className="about">
        <h1 style={{textAlign:'center'}}>____About US____</h1>
      <div className="about-content  top-margin">
        <div>
          Drmz System Innovations is a registered Pvt. Ltd. Company which provides embedded system and IoT solutions. We aim to provide unique, customized and user friendly solutions and products in the embedded systems space. We at Drmz, are a team of creative, enthusiastic & focused people.
        </div>
        <div>
          The Company is working on many cutting edge technologies and related products like the Internet of things (IoT), Industrial Robotics, Industrial Automation, Home and Office Automation, Demand side energy management system, Smart wireless modules for IoT, Smart attendance system, Smart Solar power generation management system, etc.
        </div>
      </div>
      {/* <img src="champ.jpg" alt="logo" className="champ" /> */}
      <div className="container">
        
        <p>
          We are a leading organization with several years of experience in our field. Our team has
          successfully completed numerous projects and has been recognized with prestigious awards.
          {/* Add more details about your organization */}
        </p>

        <h3>Awards</h3>
        <ul>
          <li>First Place Award - Category X (Year)</li>
          <li>Best Project Award - Category Y (Year)</li>
          {/* Add more awards */}
        </ul>

        <h3>Projects</h3>
        <ul>
          <li>Project A - Description of Project A</li>
          <li>Project B - Description of Project B</li>
          {/* Add more projects */}
        </ul>

        <h3>Years of Experience</h3>
        <p>
          With over 10 years of experience in the industry, we have successfully delivered high-quality
          solutions to our clients, gaining their trust and satisfaction.
        </p>
      </div>
    </div>
  );
};

export default About;
