import React from "react";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  textStyle: {
    color: "blue",
  },
});

const InvalidPath = () => {
  const classes = useStyles();
  return (
    <div>
      <h2>{"You have entered an Invalid Path please try again."}</h2>
      <h2>
        <Button
          component={Link}
          to={"/signin"}
          className={classes.textStyle}
          variant="contained"
          href="#text-buttons"
          size="large"
        >
          Go to Sign In Page
        </Button>
      </h2>
      <h2>
        <Button
          component={Link}
          to={"/register"}
          className={classes.textStyle}
          variant="contained"
          href="#text-buttons"
          size="large"
        >
          Go to Register Page
        </Button>
      </h2>
    </div>
  );
};
export default InvalidPath;
