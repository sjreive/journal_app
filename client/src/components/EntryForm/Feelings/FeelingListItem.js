import React from "react";
import classes from "./wheel_segments.module.scss";

export default function wheelSegments(props) {
  // return <div className={classes.wheel_segment}></div>;
  return (
    <>
      <svg
        className={classes.segment}
        width={250}
        fill="#000"
        viewBox="-1 -1 2 2"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
      >
        <path
          style={{
            stroke: "#000000",
            strokeWidth: 1
          }}
          d="M 1 0 A 1 1 0 0 1 0.8090169943749475 0.5877852522924731"
        />
      </svg>
      <svg
        className={classes.segment}
        width={250}
        fill="#000"
        viewBox="-1 -1 2 2"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
      >
        <path
          style={{
            stroke: "#000000",
            strokeWidth: 1
          }}
          d="M 0.8090169943749475 0.5877852522924731 A 1 1 0 0 1 0.30901699437494745 0.9510565162951535"
        />
      </svg>
    </div>
  );
}
