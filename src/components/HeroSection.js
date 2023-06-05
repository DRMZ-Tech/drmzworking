import React from "react";
import { Button } from "./Button";
import "./HeroSection.css";
import "../App.css";

export default function HeroSection() {
  return (
    <div className="hero-container">
      <video src="/videos/hero.mp4" autoPlay loop muted />
      <h1>Welcome to the DRMZ Systems</h1>
      <p>
        Industrial Automation Simplified We manufacture smart products to help
        industries transition into Industry 4.0
      </p>
      <div className="hero-btns">
        <Button
          className="btns"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
          link="/animals"
        >
          Get Started
        </Button>
      </div>
    </div>
  );
}
