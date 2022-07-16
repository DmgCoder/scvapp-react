import * as React from "react";

const SvgComponent = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path
      style={{
        fill: "none",
        strokeWidth: 2,
        strokeLinecap: "butt",
        strokeLinejoin: "miter",
        stroke: "#171718",
        strokeOpacity: 1,
        strokeMiterlimit: 10,
      }}
      d="M3 17 16 4l13 13"
      transform="scale(16)"
    />
    <path
      style={{
        fill: "none",
        strokeWidth: 2,
        strokeLinecap: "butt",
        strokeLinejoin: "miter",
        stroke: "#171718",
        strokeOpacity: 1,
        strokeMiterlimit: 10,
      }}
      d="M6 14v13h7V17h6v10h7V14"
      transform="scale(16)"
    />
  </svg>
);

export default SvgComponent;
