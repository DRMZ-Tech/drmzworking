import "../../../App.css";
import React from "react";
import { Button } from "../../Button";
import "./Home.css";
import MarqueeSlider from "./MarqueeSlider";

function Home() {
  const images = [
    "https://drmz.in/assets/img/clients/client-1.png",
    "https://drmz.in/assets/img/clients/client-2.png",
    "https://drmz.in/assets/img/clients/client-3.png",
    "https://drmz.in/assets/img/clients/client-4.png",
    "https://drmz.in/assets/img/clients/client-5.png",
    "https://drmz.in/assets/img/clients/client-6.png",
  ];

  return (
    <>
      <div id="home">
        <div className="main-container">
          <div className="hero-container">
            <h1>Industrial Automation Simplified</h1>
            <p>
              We manufacture smart products to help industries transition into
              Industry 4.0
            </p>
          </div>
          <div className="hero-container1">
            <img className="photo" src="home.png" alt="logo" />
          </div>
        </div>
      </div>
      <MarqueeSlider images={images} />
    </>
  );
}

export default Home;
