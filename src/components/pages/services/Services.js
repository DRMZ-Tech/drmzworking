import "../../../App.css";
import React from "react";
import "./Services.css";
import circuitImage from "./circuit.avif";
import iotImage from "./iot.png";
import automationImage from "./automation.jpeg";
import roboticsImage from "./robotics.jpeg";

const Services = () => {
  return (
    <div className="services-container">
      <h2>Services</h2>
      <div className="service">
        <div className="service-content">
          <div className="service-image">
            <img src={circuitImage} alt="Circuit and PCB Design" />
          </div>
          <div className="service-text">
            <h3>Circuit and PCB Design</h3>
            <p>
              Our expert designers optimize the power and significantly increase
              the life of PCB.
            </p>
            <a href="#">READ MORE</a>
          </div>
        </div>
      </div>
      <div className="service">
        <div className="service-content">
          <div className="service-image">
            <img src={iotImage} alt="IoT Products" />
          </div>
          <div className="service-text">
            <h3>IoT Products</h3>
            <p>
              We build smart appliances and products that communicate with each
              other and operate autonomously.
            </p>
            <a href="#">READ MORE</a>
          </div>
        </div>
      </div>
      <div className="service">
        <div className="service-content">
          <div className="service-image">
            <img src={automationImage} alt="Industrial Automation" />
          </div>
          <div className="service-text">
            <h3>Industrial Automation</h3>
            <p>Automate your industrial workflows.</p>
            <a href="#">READ MORE</a>
          </div>
        </div>
      </div>
      <div className="service">
        <div className="service-content">
          <div className="service-image">
            <img src={roboticsImage} alt="Robotics" />
          </div>
          <div className="service-text">
            <h3>Robotics</h3>
            <p>
              Smart Autonomous Robots to navigate around and carry payloads up
              to 200Kgs.
            </p>
            <a href="#">READ MORE</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
