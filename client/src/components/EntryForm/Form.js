import React, { useState, useEffect } from "react";

import classes from "./Form.module.scss";
import { useVisualMode } from "../../hooks/useVisualMode";

import FeelingList from "./Feelings/FeelingList";
import FeelingsTagList from "./Feelings/FeelingsTagList";

export default function Form(props) {
  const [primaryFeeling, setPrimaryFeeling] = useState("");
  const [entryFeelings, setEntryFeelings] = useState({});
  const { mode, transition, back } = useVisualMode("FIRST");

  const feelingClickHandler = (feeling, obj) => {
    if (mode === "FIRST") {
      setPrimaryFeeling(feeling);
    }

    setEntryFeelings(prev => {
      console.log("primary feeling:", primaryFeeling);
      return { ...prev, [feeling]: obj };
    });
    transition("SECOND");
  };

  const tagClickHandler = feeling => {
    // add check to ensure key doesn't already exist.....
    console.log(`Firing Click Handler.... with ${feeling}`);

    setEntryFeelings(prev => {
      console.log("prev", prev);
      const copy = Object.keys(prev).filter(entryFeeling => {
        console.log(entryFeeling);
        return entryFeeling !== feeling;
      });
      const copyPrev = {};
      copy.forEach(copiedFeeling => {
        copyPrev[copiedFeeling] = prev[copiedFeeling];
      });
      if (copy.length <= 1 && copy[0] !== primaryFeeling) {
        transition("FIRST");
        return copyPrev;
      }
      return copyPrev;
    });
  };

  return (
    <div className={classes.newEntryForm}>
      {console.log("state:", entryFeelings)}
      {mode === "FIRST" && (
        <div>
          <h2>How do you feel right now?</h2>
          <FeelingList
            feelings={props.feelings}
            clickHandler={feelingClickHandler}
          />
        </div>
      )}

      {mode === "SECOND" && (
        <div>
          <div className={classes.primaryFeeling}>{primaryFeeling}</div>
          <FeelingList
            feelings={
              entryFeelings &&
              entryFeelings[Object.keys(entryFeelings)[0]] &&
              entryFeelings[Object.keys(entryFeelings)[0]].subFeelings
            }
            clickHandler={feelingClickHandler}
          />
        </div>
      )}
      <p>(mouseover a feeling for a description)</p>
      <FeelingsTagList
        feelings={entryFeelings}
        clickHandler={tagClickHandler}
      />
    </div>
  );
}
