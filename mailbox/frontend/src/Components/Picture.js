import React, { Component } from "react";
import "../App.css";
import "./Picture.css";
import Panel from "./Panel";
// import pic3 from "../images/img_lights.jpg";
class Picture extends Component {
  constructor() {
    super();

    this.state = {
      buttons: [],
      isVisible: true,
    };
  }

  componentWillMount() {
    this.setState({
      buttons: [
        {
          id: 1,
          name: "Request photo",
          action: "on",
        },
      ],
    });
  }

  render() {
    return (
      <div className="container2">
        <div className="bor">
          <h2 style={{ margin: 0, left: 0, top: 0 }} className="heading">
            Real Time rendered Images
          </h2>

          <br />
          {/* {this.state.isVisible ? <img className="imag" src={pic3} /> : null} */}
          {this.state.isVisible ? (
            <img className="imag" src="/img_lights.jpg" />
          ) : null}

          <button
            className="btn"
            onClick={() =>
              this.setState({
                isVisible: !this.state.isVisible,
              })
            }
          >
            Toggle the image
          </button>
        </div>
        {/* <h1 className="glitch">
          <span aria-hidden="true">
            <img className="imag" src={pic3}></img>
          </span>
        </h1>
        <Panel buttons={this.state.buttons} /> */}
      </div>
    );
  }
}

export default Picture;
