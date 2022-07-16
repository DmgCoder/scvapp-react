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
        fill: "none",
        strokeWidth: 2,
        strokeLinecap: "butt",
        strokeLinejoin: "miter",
        stroke: "#171718",
        strokeOpacity: 1,
        strokeMiterlimit: 10,
      }}
      d="M16 12a4 4 0 1 0 0 8 4 4 0 0 0 0-8Zm0 0"
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
      d="M25 16a9.02 9.02 0 0 0-.223-1.97l2.615-2.298-2-3.464-3.304 1.118a8.984 8.984 0 0 0-3.407-1.979L18 4h-4l-.68 3.406a8.974 8.974 0 0 0-3.408 1.979L6.608 8.268l-2 3.464 2.615 2.298A9.02 9.02 0 0 0 7 16c0 .677.081 1.335.223 1.97l-2.615 2.298 2 3.464 3.304-1.118a8.984 8.984 0 0 0 3.407 1.979L14 28h4l.68-3.406a8.974 8.974 0 0 0 3.408-1.979l3.304 1.118 2-3.464-2.615-2.298A9.036 9.036 0 0 0 25 16Zm0 0"
      transform="scale(16)"
    />
  </svg>
);

export default SvgComponent;
