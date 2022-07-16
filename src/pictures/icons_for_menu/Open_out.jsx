import * as React from "react";

const SvgComponent = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="512pt"
    height="512pt"
    viewBox="0 0 512 512"
    {...props}
  >
    <path
      style={{
        stroke: "none",
        fillRule: "nonzero",
        fill: "#171718",
        fillOpacity: 1,
      }}
      d="M336 256v144H112V176h144l32-32H80v288h288V224Zm0 0"
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
      d="M18 6h8v8m0-8L12 20"
      transform="scale(16)"
    />
  </svg>
);

export default SvgComponent;
