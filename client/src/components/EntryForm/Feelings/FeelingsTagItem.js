import React from "react";
import { FaSmileBeam, FaTimes } from "react-icons/fa";
import classes from "../Form.module.scss";

export default function FeelingsTagItem(props) {
  console.log("feeling tag props:", props);
  return (
    <div className={classes.feelingTag}>
      <FaTimes className={classes.feelingTag__icon} size={10} />
      <FaSmileBeam className={classes.feelingTag__icon} size={10} />
      <p>{props.name}</p>
    </div>
  );
}
