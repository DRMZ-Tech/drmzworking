import React from "react";
import "./Services.css";
import circuitImage from "./circuit.avif";
import iotImage from "./iot.png";
import automationImage from "./automation.jpeg";
import roboticsImage from "./robotics.jpeg";
import Features from "./features";

const Services = () => {
  return (
    <div className="services-container" id="services">
      <h1 className="services-title">Services</h1>
      <div className="services-grid">
        <div className="service">
          <div className="service-content">
            <div className="service-image">
              <img src={circuitImage} alt="Circuit and PCB Design" />
            </div>
            <div className="service-text">
              <h3 className="service-heading">Circuit and PCB Design</h3>
              <p className="service-description">
                Our expert designers optimize the power and significantly
                increase the life of PCB.
              </p>
              <a href="#" className="service-link">
                READ MORE
              </a>
            </div>
          </div>
        </div>
        <div className="service">
          <div className="service-content">
            <div className="service-image">
              <img src={iotImage} alt="IoT Products" />
            </div>
            <div className="service-text">
              <h3 className="service-heading">IoT Products</h3>
              <p className="service-description">
                We build smart appliances and products that communicate with
                each other and operate autonomously.
              </p>
              <a href="#" className="service-link">
                READ MORE
              </a>
            </div>
          </div>
        </div>
        <div className="service">
          <div className="service-content">
            <div className="service-image">
              <img src={automationImage} alt="Industrial Automation" />
            </div>
            <div className="service-text">
              <h3 className="service-heading">Industrial Automation</h3>
              <p className="service-description">
                Automate your industrial workflows.
              </p>
              <a href="#" className="service-link">
                READ MORE
              </a>
            </div>
          </div>
        </div>
        <div className="service">
          <div className="service-content">
            <div className="service-image">
              <img src={roboticsImage} alt="Robotics" />
            </div>
            <div className="service-text">
              <h3 className="service-heading">Robotics</h3>
              <p className="service-description">
                Smart Autonomous Robots to navigate around and carry payloads up
                to 200Kgs.
              </p>
              <a href="#" className="service-link">
                READ MORE
              </a>
            </div>
          </div>
        </div>
      </div>
      <Features />
    </div>
  );
};

export default Services;
