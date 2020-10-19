import React, { Component, useState } from "react";
import "../styles/App.css";

class App extends Component {
  render() {
    const relativesList = ["Harsha", "Akhil", "Ram", "Hello"];
    return (
      <>
        <ol key="relativeList">
          {relativesList.map((m, index) => (
            <li key={`relativeListItem${index + 1}`}>{m}</li>
          ))}
        </ol>
      </>
    );
  }
}

export default App;
