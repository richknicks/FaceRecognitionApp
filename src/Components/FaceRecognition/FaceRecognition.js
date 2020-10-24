import React from "react";
import DrawBoxes from "../DrawBoxes/DrawBoxes";
import "./FaceRecognition.css";
import cuid from "cuid";

const FaceRecognition = ({ imageUrl, box }) => {
  return (
    <div className="faceContainer">
      <div className="imageStyle">
        <img
          id="inputimage"
          src={imageUrl}
          alt=""
          width="500px"
          height="auto"
        />
        {box.map((box, i) => (
          <DrawBoxes boundings={box} key={cuid()} />
        ))}
      </div>
    </div>
  );
};
export default FaceRecognition;
