import React, { Component } from "react";
import "./App.css";
import button from "./button";
class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      video_link: ""
    };
    this.updateInputValue = this.updateInputValue.bind(this);
    this.downloadVideo = this.downloadVideo.bind(this);
  }

  downloadVideo = () => {
    // console.log(this.state.video_link);
    var query = this.state.video_link;
    // console.log("yuggjm");

    window.location.href = `http://localhost:7000/downloadvideo?url=${query}`;
  };

  render() {
    return (
      <div className="App">
        <h1>Khud ka video Downloader</h1>
        <input
          value={this.state.video_link}
          onChange={evt => this.updateInputValue(evt)}
          id="input_link"
          placeholder="Youtube Video Link"
        ></input>
        <button onClick={this.downloadVideo}>Convert</button>
      </div>
    );
  }
  updateInputValue(evt) {
    // console.log("zz" + evt.target.value);
    this.setState({
      video_link: evt.target.value
    });
    // console.log("zz" + this.state.video_link);
  }
}

export default App;
