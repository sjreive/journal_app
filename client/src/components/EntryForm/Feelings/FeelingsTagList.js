import React from "react";
import classes from "../Form.module.scss";
import FeelingsTagItem from "./FeelingsTagItem";

export default function FeelingsTagList(props) {
  console.log("props feelings", props.feelings);
  const feelingsList =
    props.feelings &&
    Object.keys(props.feelings).map(feeling => {
      return (
        <FeelingsTagItem
          key={feeling}
          name={feeling}
          emoticon={props.feelings[feeling].emoticon}
          clickHandler={props.clickHandler}
        />
      );
    });

  return <div className={classes.feelingsTagList}>{feelingsList}</div>;
}
