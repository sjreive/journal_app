import React, { useState, useEffect } from "react";

import classes from "./Form.module.scss";
import { useVisualMode } from "../../hooks/useVisualMode";

import FeelingList from "./Feelings/FeelingList";
import FeelingsTagList from "./Feelings/FeelingsTagList";

export default function Form(props) {
  const [entryFeelings, setEntryFeelings] = useState({});
  const { mode, transition, back } = useVisualMode("FIRST");

  const feelingClickHandler = (feeling, obj) => {
    setEntryFeelings(prev => {
      return { ...prev, [feeling]: obj };
    });
    transition("SECOND");
  };

  return (
    <div className={classes.newEntryForm}>
      <h2>How do you feel right now?</h2>

      {mode === "FIRST" && (
        <FeelingList
          feelings={props.feelings}
          clickHandler={feelingClickHandler}
        />
      )}

      {mode === "SECOND" && (
        <FeelingList
          feelings={entryFeelings[Object.keys(entryFeelings)[0]].subFeelings}
          clickHandler={feelingClickHandler}
        />
      )}
      <p>(mouseover a feeling for a description)</p>
      <FeelingsTagList feelings={entryFeelings} />
    </div>
  );
}
