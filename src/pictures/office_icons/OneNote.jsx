import * as React from "react";

const SvgComponent = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
    <defs>
      <style>{".cls-4{fill:#7719aa}"}</style>
    </defs>
    <title>{"OneNote_24x"}</title>
    <g id="OneNote">
      <g id="_24" data-name={24}>
        <path
          style={{
            fill: "none",
          }}
          d="M0 0h24v24H0z"
        />
        <path
          d="M23 1H7a1 1 0 0 0-1 1v20a1 1 0 0 0 1 1h13.23A3.77 3.77 0 0 0 24 19.23V2a1 1 0 0 0-1-1Z"
          style={{
            fill: "#ca64ea",
          }}
        />
        <path
          d="M13.83 6H6v14h7.6a1.5 1.5 0 0 0 1.4-1.35V7.17A1.18 1.18 0 0 0 13.83 6Z"
          style={{
            opacity: 0.75,
          }}
        />
        <rect
          id="Back_Plate"
          data-name="Back Plate"
          className="cls-4"
          y={5}
          width={14}
          height={14}
          rx={1.17}
        />
        <path
          d="M3.8 8h1.7l2.94 5.16a5.34 5.34 0 0 1 .33.77 6.57 6.57 0 0 1-.05-1.06V8h1.48v8H8.61l-3.06-5.32a5.11 5.11 0 0 1-.31-.55 10.22 10.22 0 0 1 0 1.16V16H3.8Z"
          style={{
            fill: "#fff",
          }}
        />
        <path
          style={{
            fill: "#ae4bd5",
          }}
          d="M18 5h6v6h-6z"
        />
        <path
          style={{
            fill: "#9332bf",
          }}
          d="M18 11h6v6h-6z"
        />
        <path className="cls-4" d="M18 17v6h5a1 1 0 0 0 1-1v-5Z" />
      </g>
    </g>
  </svg>
);

export default SvgComponent;
