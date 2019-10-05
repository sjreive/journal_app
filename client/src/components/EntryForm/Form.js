import React from "react";

import classes from "./Form.module.scss";

import FeelingList from "./Feelings/FeelingList";

export default function Form(props) {
  return (
    <div className={classes.newEntryForm}>
      <h2>How do you feel right now?</h2>
      <FeelingList feelings={props.feelings} />
      <p>(mouseover a feeling for a description)</p>
    </div>
  );
}
