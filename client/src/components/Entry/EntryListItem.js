import React from "react";
import classes from "./EntryList.module.scss";
import getEmoticon from "../../helpers/helpers";

export default function EntryListItem(props) {
  const feelings = Object.keys(props.feelings).map(feeling => {
    return getEmoticon(feeling, 30, classes.EntryListItem__emoticon);
  });

  return (
    <div className={classes.EntryListItem}>
      <div className={classes.EntryListItem__text}>
        Feelin'{" "}
        <div className={classes.EntryListItem__feelings}>{feelings}</div>{" "}
        because {props.text}
      </div>
      <div className={classes.EntryListItem__date}>
        <p>{props.date}</p>
      </div>
    </div>
  );
}
