import "../../../App.css";
import React from "react";
import { Button } from "../../Button";
import "./Home.css";

function Home() {
  return (
    <div>
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
      <div className="image-grid">
        <div className="grid-item">
          <img
            src="https://drmz.in/assets/img/clients/client-1.png"
            alt="Image 1"
          />
        </div>
        <div className="grid-item">
          <img
            src="https://drmz.in/assets/img/clients/client-2.png"
            alt="Image 2"
          />
        </div>
        <div className="grid-item">
          <img
            src="https://drmz.in/assets/img/clients/client-3.png"
            alt="Image 3"
          />
        </div>
        <div className="grid-item">
          <img
            src="https://drmz.in/assets/img/clients/client-4.png"
            alt="Image 4"
          />
        </div>
        <div className="grid-item">
          <img
            src="https://drmz.in/assets/img/clients/client-5.png"
            alt="Image 5"
          />
        </div>
        <div className="grid-item">
          <img
            src="https://drmz.in/assets/img/clients/client-6.png"
            alt="Image 6"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
