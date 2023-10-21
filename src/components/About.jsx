import React from "react";
import "../styles/About.css";
import people from "../assets/pe.svg";
export const About = () => {
  return (
    <div className="aboutapp" id="section1">
      <div class="div1">
        <img src={people} alt="" />
      </div>
      <div class="div2">
        <h1 id="abouth1">About me.</h1>
        <h2>
          A dedicated FullStack Developer based in Buenos Aires, Argentina 📍
        </h2>
        <p>
          I am 20 years old and I live in the city of Buenos Aires. I am a fan
          of video games and sports in general. As a Developer, I
          excel at designing and maintaining responsive websites that offer a
          seamless user experience. My experience lies in creating dynamic and
          attractive interfaces by writing clean and optimized code and using
          cutting-edge development tools and techniques, where said applications
          are supported by a robust backend, using the best development and
          validation practices.
        </p>
      </div>
    </div>
  );
};
