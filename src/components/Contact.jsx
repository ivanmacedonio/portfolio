import React from "react";
import "../styles/contact.css";
import icon from "../assets/mail.svg";
export const Contact = () => {
  return (
    <div className="contact">
      <div className="titlecontact">
        <h3>Contact</h3>
      </div>
      <div className="descripcontact">
        <h2>Don't be shy! Hit me up! 👇</h2>
      </div>
      <div className="gmail">
        <img src={icon} />
      </div>
      <div className="gmailp">
        <p>ivanmacedonio778@gmail.com</p>
      </div>
    </div>
  );
};
