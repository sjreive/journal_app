import React, { useState } from "react";
import { FaList, FaPenAlt } from "react-icons/fa";
import classes from "./App.module.scss";

import { feelings } from "./data/feelings";
import prevEntries from "./data/entries";
import EntryForm from "./components/EntryForm/Form";
import EntryList from "./components/Entry/EntryList";
import { useVisualMode } from "./hooks/useVisualMode";

function App() {
  // State Hooks
  const [entries, setEntries] = useState(prevEntries);
  const { mode, transition } = useVisualMode("FORM");

  // Click Handlers
  const entrySubmissionHandler = (entryFeelings, textEntry) => {
    let date = new Date();
    date = date
      .toString()
      .split(" ")
      .splice(0, 4)
      .join(" ");
    setEntries(prev => {
      return [{ entryFeelings, textEntry, date }, ...prev];
    });
    transition("ENTRIES");
  };
  return (
    <div className="App">
      <div className={classes.mainBody}>
        <div className={classes.navContainer}>
          <div
            className={classes.Button}
            onClick={() => {
              transition("ENTRIES");
            }}
          >
            <FaList className={classes.Button__icon} size={30} />
          </div>
          <div
            className={classes.Button}
            onClick={() => {
              transition("FORM");
            }}
          >
            <FaPenAlt className={classes.Button__icon} size={30} />
          </div>
        </div>
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
