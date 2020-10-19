import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
// import "./ImageLinkForm.css";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "50ch",
    },
  },
  btn: {
    background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
    border: 0,
    borderRadius: 3,
    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
    color: "white",
    height: 48,
    marginBottom: "1rem",
    padding: "0 30px",
    transition: "all .2s ease-in-out",
    "&:hover": {
      transform: "scale(1.1)",
    },
  },
}));

const ImageLinkForm = () => {
  const classes = useStyles();
  return (
    <div className="container">
      <p>
        {
          "The Face Recognition program will detect faces in your pictures. Give it a try!"
        }
      </p>
      <div className="inputBox">
        <form className={classes.root} noValidate autoComplete="off">
          <TextField
            id="outlined-basic"
            label="Enter Image File"
            variant="outlined"
          />
        </form>
        <Button className={classes.btn} variant="contained" color="secondary">
          Detect
        </Button>
      </div>
    </div>
  );
};
export default ImageLinkForm;
