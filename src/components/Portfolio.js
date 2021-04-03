import React from "react";
import "./Portfolio.css";
import Project from "./Project";
import IMAGES from "../Data.js";

function Portfolio() {
  return (
    <div className="portfolio">
      <div className="portfolio__container">
        <h1>Portfolio</h1>
        <p>Click On the Image to Visit the Website</p>
        <div className="portfolio__projects">
          <Project img={IMAGES[0]} />
          <Project img={IMAGES[1]} />
          <Project img={IMAGES[2]} />
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
