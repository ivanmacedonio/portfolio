import React from "react";
import "../styles/About.css";
import people from "../assets/pe.svg";
export const About = () => {
  return (
    <div className="aboutapp">
      <div class="div1">
        <img src={people} alt="" />
      </div>
      <div class="div2">
        <h1>About me.</h1>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae culpa
          porro ut placeat optio quos explicabo! Voluptates magnam
          exercitationem hic? Quidem similique, blanditiis asperiores a expedita
          sit eius nulla necessitatibus.
        </p>
      </div>
    </div>
  );
};
