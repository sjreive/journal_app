import React from "react";
import classes from "../Form.module.scss";
import FeelingListItem from "./FeelingListItem";

export default function FeelingList(props) {
  return (
    <div className={classes.feelingList}>
      <FeelingListItem />
      <FeelingListItem />
      <FeelingListItem />
      <FeelingListItem />
      <FeelingListItem />
      <FeelingListItem />
    </div>
  );
}
