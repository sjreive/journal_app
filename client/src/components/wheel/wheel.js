import React from "react";

import classes from "./wheel.module.scss";

import WheelSegment from "./wheel_segements";

export default function Wheel(props) {
  return (
    <div className={classes.Container}>
      <div className={classes.wheel_LevelThree}></div>
      <div className={classes.wheel_LevelTwo}></div>
      <div className={classes.wheel_LevelOne}>
        <WheelSegment />
      </div>
    </div>
  );
}
