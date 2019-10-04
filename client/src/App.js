import React, { Component } from "react";
import logo from "./logo.svg";
import classes from "./App.module.scss";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>HEADER TITLE</h2>
        </div>
        <div className={classes.mainBody}>
          <div className={classes.wheelContainer}></div>
          <div className={classes.descriptionContainer}></div>
        </div>
        <div className={classes.entryFormContainer}></div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
