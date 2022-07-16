import * as React from "react";

const SvgComponent = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 30 30"
    width={480}
    height={480}
    {...props}
  >
    <path d="M17.941 4 5 8.4v13.2l5-1.65v-11l8-1.65v15.95L5 21.6 17.941 26 25 24.35V5.65L17.941 4z" />
  </svg>
);

export default SvgComponent;
