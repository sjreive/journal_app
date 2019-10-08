import React from "react";
import classes from "./EntryList.module.scss";

export default function FeelingsTagItem(props) {
  return (
    <div className={classes.entryFeelingTag}>
      <h4 classNames={classes.entryFeelingTag__text}>{props.name}</h4>
      {props.emoticon}
    </div>
  );
}
