import React from "react";

import classes from "./App.module.scss";

import { feelings } from "./data/feelings";

import EntryForm from "./components/EntryForm/Form";
import Entries from "./components/Entry/EntryList";

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <h2>HEADER TITLE</h2>
      </div>
      <div className={classes.mainBody}>
        <div className={classes.navContainer}></div>
        <div className={classes.formContainer}></div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    </div>
  );
}

export default App;
