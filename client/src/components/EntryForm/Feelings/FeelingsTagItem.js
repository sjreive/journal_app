import React from "react";
import { FaTimes } from "react-icons/fa";
import classes from "../Form.module.scss";

export default function FeelingsTagItem(props) {
  const emoticon = (
    <FaTimes
      className={classes.feelingTag__icon}
      size={13}
      onClick={() => props.clickHandler(props.name)}
    />
  );
  return (
    <div className={classes.feelingTag}>
      {emoticon}
      <h5 classNames={classes.feelingTag__text}>{props.name}</h5>
      {props.emoticon}
    </div>
  );
}
