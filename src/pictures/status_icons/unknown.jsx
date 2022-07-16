import * as React from "react";

const SvgComponent = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 12 12"
    style={{
      enableBackground: "new 0 0 12 12",
    }}
    xmlSpace="preserve"
    {...props}
  >
    <circle
      cx={6}
      cy={6}
      r={6}
      style={{
        fill: "#aabecf",
      }}
    />
    <circle
      cx={6}
      cy={6}
      r={5}
      style={{
        fill: "#fff",
      }}
    />
  </svg>
);

export default SvgComponent;
