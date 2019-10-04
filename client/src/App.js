import React from "react";

import classes from "./App.module.scss";

import { feelings } from "./data/feelings";

import Wheel from "./components/wheel/wheel";

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <h2>HEADER TITLE</h2>
      </div>
      <div className={classes.mainBody}>
        <div className={classes.navContainer}></div>
        <div className={classes.wheelContainer}>
          <Wheel feelings={feelings} />
        </div>

        <div className={classes.descriptionContainer}></div>
      </div>
      <div className={classes.entryFormContainer}></div>
      <p className="App-intro">
        To get started, edit <code>src/App.js</code> and save to reload.
      </p>
    </div>
  );
}

export default App;
