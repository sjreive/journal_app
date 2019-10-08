import React from "react";
import classes from "./EntryList.module.scss";
import getEmoticon from "../../helpers/helpers";
import EntryTag from "./EntryTag";

export default function EntryListItem(props) {
  const feelings = Object.keys(props.feelings).map((feeling, index) => {
    return (
      <EntryTag
        key={index}
        emoticon={getEmoticon(feeling, 20, classes.entryFeelingTag__emoticon)}
        name={feeling}
      />
    );
  });

  return (
    <div className={classes.EntryListItem}>
      <div className={classes.EntryListItem__text}>
        Feelin'{feelings}
        {"because... "}
        <div className={classes.EntryListItem__input}>{props.text}</div>
      </div>
      <div className={classes.EntryListItem__date}>
        <h5>{props.date}</h5>
      </div>
    </div>
  );
}
