import React from "react";
import "../styles/card.css";
import git from '../assets/github.svg'
export const Card = ({ title, parraph, footer, image }) => {
  return (
    <>
      <div class="card">
        <div class="card-image">
          <img src={image} alt="" />
        </div>
        <div class="category"> {title} </div>
        <div class="heading">
          {" "}
          {parraph}
          <div className="gith">
            <img src={git} alt="" />
          </div>
          <div class="author">
            {" "}
            By <span class="name">{footer} </span>
          </div>
        </div>
      </div>
    </>
  );
};
