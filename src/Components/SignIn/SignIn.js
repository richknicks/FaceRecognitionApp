import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import face from "../Logo/faceRecLogo.png";
import { Link } from "react-router-dom";
import axios from "axios";
import { withRouter } from "react-router-dom";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Button href="https://material-ui.com/">Face Recognition App</Button>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  root: {
    backgroundColor: "transparent",
    boxShadow: "5px 10px",
    border: "2px solid black",
    minWidth: 275,
    marginTop: "64px",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  navButton: {
    color: "blue",
  },

  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
}));

const SignIn = ({ history, loadUser, setSignIn }) => {
  const classes = useStyles();
  const [signinEmail, setSigninEmail] = useState("");
  const [signinPassword, setSigninPassword] = useState("");

  const onEmailChange = (event) => {
    setSigninEmail(event.target.value);
  };
  const onPasswordChange = (event) => {
    setSigninPassword(event.target.value);
  };
  const onSubmitSignin = () => {
    axios
      .post("http://localhost:5000/signin", {
        email: signinEmail,
        password: signinPassword,
      })
      .then((response) => {
        loadUser(response.data);
        history.push("/home");
        setSignIn();
      })

      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <Container component="main" maxWidth="xs">
      <Card className={classes.root}>
        <CardContent>
          <CssBaseline />
          <div className={classes.paper}>
            <img src={face} width="80px" height="auto" alt="Logo" />

            <Typography
              component="h1"
              variant="h5"
              style={{ marginTop: "50px" }}
            >
              Sign In
            </Typography>
            <form className={classes.form} noValidate>
              <TextField
                onChange={onEmailChange}
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
              />
              <TextField
                onChange={onPasswordChange}
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />

              <Button
                type="button"
                onClick={onSubmitSignin}
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
              >
                Sign In
              </Button>
              <Grid container justify="center">
                <Grid item>
                  <Button
                    className={classes.navButton}
                    component={Link}
                    to={"/register"}
                    variant="outlined"
                    color="primary"
                    href="#outlined-buttons"
                  >
                    {"Don't have an account? Register"}
                  </Button>
                </Grid>
              </Grid>
            </form>
          </div>
        </CardContent>
      </Card>
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
  );
};

export default withRouter(SignIn);
