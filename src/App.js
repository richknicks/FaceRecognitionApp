import React, { Component } from "react";
import Navigation from "./Components/Navigation/Navigation";
import Clarifai from "clarifai";
import Logo from "./Components/Logo/Logo";
import ImageLinkForm from "./Components/ImageLinkForm/ImageLinkForm";
import Rank from "./Components/Rank/Rank";
import Particles from "react-tsparticles";
import "./App.css";

const app = new Clarifai.App({
  apiKey: "80f4141be0554cd19497116e8d784e83",
});

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
      value: "#ffffff",
    },
    links: {
      color: "#ffffff",
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

class App extends Component {
  constructor() {
    super();
    this.state = {
      input: "",
    };
  }
  onInputChange = (event) => {
    console.log(event.target.value);
  };
  onButtonSubmit = () => {
    console.log("click");

    app.models
      .predict(
        Clarifai.FACE_DETECT_MODEL,
        "https://www.facebeautyscience.com/wp-content/uploads/2020/04/face-beauty-skin-face2-proc.jpg"
      )
      .then(
        function (response) {
          console.log(response);
        },
        function (err) {
          // there was an error
        }
      );
  };
  render() {
    return (
      <div className="App">
        <Particles
          className="particles"
          id="tsparticles"
          options={particlesOptions}
        />
        <Navigation />
        <Logo />
        <Rank />
        <ImageLinkForm
          onInputChange={this.onInputChange}
          onButtonSubmit={this.onButtonSubmit}
        />
        {/* <FaceRecognition/> */}
      </div>
    );
  }
}

export default App;
