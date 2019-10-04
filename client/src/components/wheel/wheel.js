import React from "react";

import classes from "./wheel.module.scss";

export default function Wheel(props) {
  return (
    <div>
      <div className={classes.wheel_LevelThree}>
        <p>lvl 3 wheel</p>
      </div>
      <div className={classes.wheel_LevelTwo}>
        <p>lvl 2 wheel</p>
      </div>
      <div className={classes.wheel_LevelOne}>
        <p>lvl 1 wheel</p>
      </div>
    </div>
  );
}
