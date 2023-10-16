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
          <img src={github} alt="" />
          <img src={linkedin} alt="" />
          <div className="Tech">
            <Stack></Stack>
          </div>
        </div>
        <div className="image"></div>
      </div>
    </>
  );
};
