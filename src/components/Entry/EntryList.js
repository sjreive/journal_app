import React from "react";
import classes from "./EntryList.module.scss";
import EntryListItem from "./EntryListItem";

export default function EntryList(props) {
  const Entries =
    props.entries &&
    props.entries.map((entry, index) => {
      return (
        <EntryListItem
          key={index}
          text={entry.textEntry}
          feelings={entry.entryFeelings}
          date={entry.date}
        />
      );
    });

  return (
    <div className={classes.EntryList}>
      <h1>My Entries</h1>
      <ul>{Entries}</ul>
    </div>
  );
}
