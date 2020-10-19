import React from "react";
import face from "./faceRecLogo.png";
import "./Logo.css";
import Tilt from "react-tilt";
const Logo = () => {
  return (
    <Tilt className="Tilt" options={{ max: 55 }}>
      <div className="Tilt-inner">
        <img src={face} alt="Logo" />
      </div>
    </Tilt>
  );
};
export default Logo;
