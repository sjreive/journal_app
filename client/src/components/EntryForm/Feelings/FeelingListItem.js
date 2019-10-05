import React from "react";
import { FaSmileBeam } from "react-icons/fa";
import classes from "../Form.module.scss";

export default function FeelingListItem(props) {
  return (
    <div className={classes.feelingTile}>
      <FaSmileBeam className={classes.feelingTile__icon} size={30} />
      <p>Feeling</p>
    </div>
  );
}
