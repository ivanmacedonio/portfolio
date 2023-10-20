import React from "react";
import "../styles/NavBar.css";
import { Stack } from "@mui/material";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";


export const NavBar = () => {
  return (
    <div className="nav">
      <span className="title">
        <h1>IvanDev.</h1>
      </span>
      <div>
        <Stack
          direction={{ xs: "column", sm: "row" }}
          spacing={{ xs: 1, sm: 2, md: 4 }}
        >
         <a href="#section1"> <span>About</span></a>
         <a href="#section2"> <span>Projects</span></a>
         <a href="#section3"> <span>Contact</span></a>
        </Stack>
      </div>
    </div>
  );
};
