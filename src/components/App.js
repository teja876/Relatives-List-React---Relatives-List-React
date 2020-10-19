import React, { Component, useState } from "react";
import "../styles/App.css";

class App extends Component {
  render() {
    const relativesList = ["Harsha", "Akhil", "Ram", "Hello"];
    return (
      <>
        <ol key="relativeList">
          {relativesList.map((m) => (
            <li key={"relativeList" + { m }}>{m}</li>
          ))}
        </ol>
      </>
    );
  }
}

export default App;
