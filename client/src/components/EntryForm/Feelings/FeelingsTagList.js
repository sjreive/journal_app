import React from "react";
import classes from "../Form.module.scss";
import FeelingsTagItem from "./FeelingsTagItem";

export default function FeelingsTagList(props) {
  console.log(props);
  const feelingsList =
    props.feelings &&
    props.feelings.map(feeling => {
      return (
        <FeelingsTagItem
          key={Object.keys(feeling)[0]}
          name={Object.keys(feeling)[0]}
          emoticon={feeling.emoticon}
          clickHandler={props.clickHandler}
        />
      );
    });

  return <div className={classes.feelingsTagList}>{feelingsList}</div>;
}
