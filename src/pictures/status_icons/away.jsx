import * as React from "react";

const SvgComponent = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 12 12"
    xmlSpace="preserve"
    {...props}
  >
    <circle fill="#FDB913" cx={6} cy={6} r={6} />
    <path
      fill="none"
      stroke="#FFF"
      strokeWidth={1.5}
      strokeMiterlimit={10}
      d="M6 2v4l2.5 2.5"
    />
  </svg>
);

export default SvgComponent;
