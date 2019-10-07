import React, { useState } from "react";

import classes from "./App.module.scss";

import { feelings } from "./data/feelings";

import EntryForm from "./components/EntryForm/Form";
import EntryList from "./components/Entry/EntryList";
import { useVisualMode } from "./hooks/useVisualMode";

function App() {
  // State Hooks
  const [entries, setEntries] = useState([]);
  const { mode, transition } = useVisualMode("FORM");

  // Click Handlers
  const entrySubmissionHandler = (entryFeelings, textEntry) => {
    const date = Date.now();
    console.log(entryFeelings, textEntry, date);
    setEntries(prev => {
      return [...prev, { entryFeelings, textEntry }];
    });
    transition("ENTRIES");
  };
  return (
    <div className="App">
      <div className={classes.mainBody}>
        <div className={classes.navContainer}></div>
        {mode === "FORM" && (
          <div className={classes.Container}>
            <EntryForm
              feelings={feelings}
              entrySubmissionHandler={entrySubmissionHandler}
            />
          </div>
        )}

        {mode === "ENTRIES" && (
          <div className={classes.Container}>
            <EntryList entries={entries} />
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
