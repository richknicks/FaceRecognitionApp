import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  imgStyle: {
    margin: "auto",
    marginTop: "1.5em",
  },
});
const FaceRecognition = ({ imageUrl }) => {
  const classes = useStyles();
  return (
    <div className="container">
      <div className={classes.imgStyle}>
        <img src={imageUrl} alt="" width="500px" height="auto" />
      </div>
    </div>
  );
};
export default FaceRecognition;
