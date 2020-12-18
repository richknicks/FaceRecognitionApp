import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  navButton: {
    color: "white",
    textDecoration: "none",
  },
  title: {
    flexGrow: 1,
    paddingLeft: "135px",
  },
}));

const Navigation = ({ setSignOut, isSignedIn }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Face Finder
          </Typography>
          {isSignedIn ? (
            <Button
              component={Link}
              to={"/"}
              className={classes.navButton}
              onClick={setSignOut}
            >
              Sign Out
            </Button>
          ) : (
            <div>
              <Button component={Link} to={"/"} className={classes.navButton}>
                Sign In
              </Button>

              <Button
                component={Link}
                to={"/register"}
                className={classes.navButton}
              >
                Register
              </Button>
            </div>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
};
export default Navigation;
