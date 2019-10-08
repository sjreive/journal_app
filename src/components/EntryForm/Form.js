import React, { useState } from "react";

import classes from "./Form.module.scss";
import { useVisualMode } from "../../hooks/useVisualMode";
import { FaAngleDoubleLeft, FaAngleDoubleRight } from "react-icons/fa";
import FeelingList from "./Feelings/FeelingList";
import FeelingsTagList from "./Feelings/FeelingsTagList";
import getEmoticon from "../../helpers/helpers";

export default function Form(props) {
  // State Hooks
  const [primaryFeeling, setPrimaryFeeling] = useState("");
  const [entryFeelings, setEntryFeelings] = useState({});
  const [textEntry, setTextEntry] = useState("");

  const { mode, transition } = useVisualMode("FIRST");

  // Click Handler Functions
  const feelingClickHandler = (feeling, obj) => {
    if (mode === "FIRST") {
      setPrimaryFeeling(feeling);
    }

    setEntryFeelings(prev => {
      return { ...prev, [feeling]: obj };
    });
    transition("SECOND");
  };

  const tagClickHandler = feeling => {
    setEntryFeelings(prev => {
      const copy = Object.keys(prev).filter(entryFeeling => {
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
    <div>
      {mode === "FIRST" && (
        <div className={classes.newEntryForm}>
          <h1>How do you feel?</h1>
          <FeelingList
            feelings={props.feelings}
            clickHandler={feelingClickHandler}
          />
          <FeelingsTagList
            feelings={entryFeelings}
            clickHandler={tagClickHandler}
          />
        </div>
      )}

      {mode === "SECOND" && (
        <div className={classes.outerContainer}>
          <div classNames={classes.backButton}>
            <FaAngleDoubleLeft
              className={classes.feelingTag__icon}
              size={30}
              onClick={() => transition("FIRST")}
            />
          </div>
          <div className={classes.newEntryForm}>
            <div className={classes.primaryFeeling}>
              {primaryFeeling}
              {getEmoticon(primaryFeeling, 30, classes.feelingTag__icon)}... or
              more specifically:
            </div>
            <FeelingList
              feelings={
                entryFeelings[primaryFeeling] &&
                entryFeelings[primaryFeeling].subFeelings
              }
              clickHandler={feelingClickHandler}
            />
            <FeelingsTagList
              feelings={entryFeelings}
              clickHandler={tagClickHandler}
            />
          </div>
          <FaAngleDoubleRight
            className={classes.feelingTag__icon}
            size={30}
            onClick={() => transition("THIRD")}
          />
        </div>
      )}

      {mode === "THIRD" && (
        <div className={classes.outerContainer}>
          <div classNames={classes.backButton}>
            <FaAngleDoubleLeft
              className={classes.feelingTag__icon}
              size={30}
              onClick={() => transition("SECOND")}
            />
          </div>
          <div className={classes.newEntryForm}>
            <h2 className={classes.inputHeader}>
              I feel
              <FeelingsTagList
                feelings={entryFeelings}
                clickHandler={tagClickHandler}
              />
              because...
            </h2>
            <div className={classes.textInput}>
              <textarea
                className={classes.input}
                type="text"
                value={textEntry}
                placeholder="Go ahead, don't be shy!"
                onChange={event => setTextEntry(event.target.value)}
              />
            </div>
          </div>
          <FaAngleDoubleRight
            className={classes.feelingTag__icon}
            size={30}
            onClick={() => {
              props.entrySubmissionHandler(entryFeelings, textEntry);
            }}
          />
        </div>
      )}
    </div>
  );
}
