import React, { Component } from "react";
import Navigation from "./Components/Navigation/Navigation";
import Logo from "./Components/Logo/Logo";
import ImageLinkForm from "./Components/ImageLinkForm/ImageLinkForm";
import Rank from "./Components/Rank/Rank";
import SignIn from "./Components/SignIn/SignIn";
import Register from "./Components/Register/Register";
import FaceRecognition from "./Components/FaceRecognition/FaceRecognition";
import Particles from "react-tsparticles";
import InvalidPath from "./Components/InvalidPath/InvalidPath";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import PrivateRoute from "./Components/Routes/PrivateRoute";

const particlesOptions = {
  background: {
    color: {
      value: "red",
    },
  },
  fpsLimit: 60,
  interactivity: {
    detectsOn: "canvas",
    events: {
      onClick: {
        enable: true,
        mode: "push",
      },
      onHover: {
        enable: true,
        mode: "repulse",
      },
      resize: true,
    },
    modes: {
      bubble: {
        distance: 400,
        duration: 2,
        opacity: 0.8,
        size: 40,
      },
      push: {
        quantity: 4,
      },
      repulse: {
        distance: 200,
        duration: 0.4,
      },
    },
  },
  particles: {
    color: {
      value: "#050505",
    },
    links: {
      color: "#0b57ba",
      distance: 150,
      enable: true,
      opacity: 0.5,
      width: 1,
    },
    collisions: {
      enable: true,
    },
    move: {
      direction: "none",
      enable: true,
      outMode: "bounce",
      random: false,
      speed: 7,
      straight: false,
    },
    number: {
      density: {
        enable: true,
        value_area: 800,
      },
      value: 80,
    },
    opacity: {
      value: 0.5,
    },
    shape: {
      type: "circle",
    },
    size: {
      random: true,
      value: 5,
    },
  },
  detectRetina: true,
};

const initialState = {
  input: "",
  imageUrl: "",
  box: [],
  isSignedIn: false,
  user: {
    id: "",
    firstName: "",
    lastName: "",
    email: "",
    entries: 0,
    joined: "",
  },
};
class App extends Component {
  constructor() {
    super();
    this.state = initialState;
  }

  loadUser = (data) => {
    this.setState({
      user: {
        id: data.id,
        firstName: data.firstName,
        lastName: data.lastName,
        email: data.email,
        entries: data.entries,
        joined: data.joined,
      },
    });
  };

  calculateFaceLocation = (data) => {
    const image = document.getElementById("inputimage");
    const width = Number(image.width);
    const height = Number(image.height);

    let arr = [];

    for (let i in data.outputs[0].data.regions) {
      if (
        `region_info` in data.outputs[0].data.regions[i] &&
        `bounding_box` in data.outputs[0].data.regions[i].region_info
      ) {
        let boundingBox =
          data.outputs[0].data.regions[i].region_info.bounding_box; //just make calling this simplier
        let obj = {
          leftCol: boundingBox.left_col * width,
          topRow: boundingBox.top_row * height,
          rightCol: width - boundingBox.right_col * width,
          bottomRow: height - boundingBox.bottom_row * height,
        };
        arr.push(obj);
      }
    }

    return arr;
  };

  displayFaceBox = (arr) => {
    console.log("Box Dimensions", arr);
    this.setState({ box: arr });
  };
  onInputChange = (event) => {
    this.setState({ input: event.target.value });
  };
  onButtonSubmit = () => {
    this.setState({ imageUrl: this.state.input });
    fetch("http://localhost:5000/imageurl", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        input: this.state.input,
      }),
    })
      .then((response) => response.json())
      .then((response) => {
        if (response) {
          fetch("http://localhost:5000/image", {
            method: "put",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              id: this.state.user.id,
            }),
          })
            .then((response) => response.json())
            .then((count) => {
              this.setState(Object.assign(this.state.user, { entries: count }));
            })
            .catch(console.log);
        }
        this.displayFaceBox(this.calculateFaceLocation(response));
      })
      .catch((error) => {
        console.log("This is an api error", error);
      });
  };
  setSignIn = () => {
    this.setState({ isSignedIn: true });
  };
  setSignOut = () => {
    this.setState({ isSignedIn: false });
  };
  setInitialState = () => {
    this.setState(initialState);
  };
  render() {
    return (
      <div className="App">
        <Particles
          className="particles"
          id="tsparticles"
          options={particlesOptions}
        />
        <Navigation
          isSignedIn={this.state.isSignedIn}
          setSignOut={this.setSignOut}
          setInitialState={this.setInitialState}
        />
        <Switch>
          <Route path="/home">
            <Logo />
            <Rank
              name={this.state.user.firstName}
              entries={this.state.user.entries}
            />
            <ImageLinkForm
              onInputChange={this.onInputChange}
              onButtonSubmit={this.onButtonSubmit}
            />
            <FaceRecognition
              box={this.state.box}
              imageUrl={this.state.imageUrl}
            />
          </Route>

          <Route exact path="/">
            <SignIn loadUser={this.loadUser} setSignIn={this.setSignIn} />
          </Route>

          <Route path="/register">
            <Register loadUser={this.loadUser} setSignIn={this.setSignIn} />
          </Route>

          <Route component={InvalidPath} />
        </Switch>
      </div>
    );
  }
}
export default App;
