import React from "react";
import { FaSmileBeam, FaTimes } from "react-icons/fa";
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
      <FaSmileBeam className={classes.feelingTag__icon_emoticon} size={13} />
    </div>
  );
}
