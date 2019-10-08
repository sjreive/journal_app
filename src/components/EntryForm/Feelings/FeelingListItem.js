import React from "react";
import getEmoticon from "../../../helpers/helpers";
import classes from "../Form.module.scss";

export default function FeelingListItem(props) {
  return (
    <div
      className={classes.feelingTile}
      onClick={() => props.clickHandler(props.name, props.feelingObj)}
    >
      {getEmoticon(props.name, 30, classes.feelingTile__icon)}
      <p>{props.name}</p>
    </div>
  );
}
