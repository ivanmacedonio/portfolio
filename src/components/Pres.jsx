import React from "react";
import "../styles/Pres.css";
import github from "../assets/github.svg";
import linkedin from "../assets/linkedin.svg";
import { Stack } from "./Stack";

export const Pres = () => {
  return (
    <>
      <div className="pres">
        <div className="prestitle">
          <h1>Fullstack React Django Developer</h1>
          <p>
            Hi, I'm Ivan Macedonio. A passionate Full-Stack developer based in
            Buenos Aires, Argentina
          </p>
          <img src={github} alt="" onClick={()=>{window.location.href = "https://github.com/ivanmacedonio"}}/>
          <img src={linkedin} alt="" onClick={()=>{window.location.href  = "https://www.linkedin.com/in/iv%C3%A1n-macedonio-544056245/"}} />
          <div className="Tech">
            <Stack></Stack>
          </div>
        </div>
        <div className="image"></div>
      </div>
    </>
  );
};
