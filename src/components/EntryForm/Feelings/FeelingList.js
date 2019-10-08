import React from "react";
import classes from "../Form.module.scss";
import FeelingListItem from "./FeelingListItem";

export default function FeelingList(props) {
  const feelingsList =
    props.feelings &&
    Object.keys(props.feelings).map(feeling => {
      return (
        <FeelingListItem
          key={feeling}
          name={feeling}
          emoticon={props.feelings[feeling].emoticon}
          description={props.feelings[feeling].definition}
          feelingObj={props.feelings[feeling]}
          clickHandler={props.clickHandler}
        />
      );
    });

  return <div className={classes.feelingList}>{feelingsList}</div>;
}
