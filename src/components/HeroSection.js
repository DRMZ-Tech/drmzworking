import React from "react";
import { Button } from "./Button";
import "./HeroSection.css";
import "../App.css";

export default function HeroSection() {
  return (
    <div className="main-container">
      <div className="hero-container">
        <h1>Industrial Automation Simplified</h1>
        <p>
          We manufacture smart products to help industries transition into
          Industry 4.0
        </p>
        <div className="hero-btns">
          <Button
            className="btns"
            buttonStyle="btn--outline"
            buttonSize="btn--large"
            link="/"
          >
            Welcome
          </Button>
        </div>
      </div>
      <div className="hero-container1">
        <img className="photo" src="homePageImage.png" alt="logo" />
      </div>
    </div>
  );
}
