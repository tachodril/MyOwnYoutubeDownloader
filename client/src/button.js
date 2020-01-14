import React, { Component } from "react";
import { AwesomeButton } from "react-awesome-button";
import AwesomeButtonStyles from "react-awesome-button/src/styles/styles.scss";

// kaam nhi kr rha

class button extends Component {
  render() {
    return (
      <AwesomeButton
        cssModule={AwesomeButtonStyles}
        type="primary"
        ripple
        onPress={() => {
          // do something
        }}
      >
        Button
      </AwesomeButton>
    );
  }
}

export default button;
