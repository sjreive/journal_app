import React, { useState, useEffect } from "react";

import classes from "./Form.module.scss";
import { useVisualMode } from "../../hooks/useVisualMode";

import FeelingList from "./Feelings/FeelingList";
import FeelingsTagList from "./Feelings/FeelingsTagList";

export default function Form(props) {
  const [entryFeelings, setEntryFeelings] = useState([]);

  //
  const feelingClickHandler = (feeling, obj) => {
    setEntryFeelings(prev => [...prev, { [feeling]: obj }]);
    console.log(entryFeelings);
  };

  return (
    <div className={classes.newEntryForm}>
      <h2>How do you feel right now?</h2>
      <FeelingList
        feelings={props.feelings}
        clickHandler={feelingClickHandler}
      />
      <p>(mouseover a feeling for a description)</p>
      <FeelingsTagList feelings={entryFeelings} />
    </div>
  );
}
