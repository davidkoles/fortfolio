import React from "react";
import "./portfolio.css";

export default function Portfolio() {
  return (
    <div className="w3-padding-32 w3-content" id="portfolio">
      <h2 className="w3-text-grey">My Portfolio</h2>
      <p className="w3-opacity" />

      <div className="w3-row-padding">
        <div className="w3-half">
          <img src="https://www.w3schools.com/w3images/wedding.jpg" />
          <img src="https://www.w3schools.com/w3images/rocks.jpg" />
          <img src="https://www.w3schools.com/w3images/sailboat.jpg" />
        </div>

        <div className="w3-half">
          <img src="https://www.w3schools.com/w3images/underwater.jpg" />
          <img src="https://www.w3schools.com/w3images/chef.jpg" />
          <img src="https://www.w3schools.com/w3images/wedding.jpg" />
          <img src="https://www.w3schools.com/w3images/p6.jpg" />
        </div>
      </div>
    </div>
  );
}
