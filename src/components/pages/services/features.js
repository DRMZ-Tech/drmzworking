import React from "react";
import "../../../App.css";
import "./features.css";

const Features = () => {
  const features = [
    "Circuit Design",
    "Image Processing",
    "Embedded Systems",
    "RFID Attendance",
    "Solar Power",
    "Agritech IoT",
    "Industrial Training",
    "IoT Projects",
  ];

  return (
    <div className="features-section">
      <h2>Features</h2>
      <ul className="features-list">
        {features.map((feature, index) => (
          <li key={index}>{feature}</li>
        ))}
      </ul>
    </div>
  );
};

export default Features;
