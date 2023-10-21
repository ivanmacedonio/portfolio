import React from "react";
import "../styles/Pres.css";
import github from "../assets/github.svg";
import linkedin from "../assets/linkedin.svg";
import { Stack } from "./Stack";
import { Download } from "./Download";

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
          <img
            src={github}
            alt=""
            onClick={() => {
              window.open("https://github.com/ivanmacedonio", "_blank");
            }}
          />
          <img
            src={linkedin}
            alt=""
            onClick={() => {
              window.open(
                "https://www.linkedin.com/in/iv%C3%A1n-macedonio-544056245/",
                "_blank"
              );
            }}
          />
          <div className="Tech">
            <Stack></Stack>
          </div>
        </div>
        <div className="image"></div>
      </div>
    </>
  );
};
