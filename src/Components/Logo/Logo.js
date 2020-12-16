import React from "react";
import face from "./faceRecLogo.png";
import "./Logo.css";

const Logo = () => {
  return (
    <div className="tiltBox">
      <div className="Tilt" options={{ max: 55 }}>
        <div className="Tilt-inner">
          <img src={face} alt="Logo" />
        </div>
      </div>
    </div>
  );
};
export default Logo;
