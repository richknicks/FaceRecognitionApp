import React from "react";

function DrawBoxes({ boundings }) {
  return (
    <div
      className="bounding-box"
      style={{
        top: boundings.topRow,
        right: boundings.rightCol,
        bottom: boundings.bottomRow,
        left: boundings.leftCol,
      }}
    ></div>
  );
}

export default DrawBoxes;
