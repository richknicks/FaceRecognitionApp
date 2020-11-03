import React from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  textStyle: {
    color: "blue",
  },
});
const Rank = ({ name, entries }) => {
  const classes = useStyles();
  return (
    <div className="container">
      <div>
        <Typography variant="h5" className={classes.textStyle}>
          {`${name}, your current entry count is ...`}
        </Typography>
      </div>
      <div>
        <Typography variant="h4">{entries}</Typography>
      </div>
    </div>
  );
};
export default Rank;
