import * as React from "react";

const SvgComponent = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" {...props}>
    <path
      style={{
        textIndent: 0,
        textAlign: "start",
        lineHeight: "normal",
        textTransform: "none",
        blockProgression: "tb",
        InkscapeFontSpecification: "Bitstream Vera Sans",
      }}
      d="M16 5c-3.854 0-7 3.146-7 7a7.026 7.026 0 0 0 3.094 5.813C8.527 19.343 6 22.88 6 27h2c0-4.43 3.57-8 8-8 2.141 0 4.068.854 5.5 2.219a5.426 5.426 0 0 0 .469 5.375L18.28 30.28l1.438 1.438 3.687-3.688c.885.61 1.944.969 3.094.969 3.026 0 5.5-2.474 5.5-5.5S29.526 18 26.5 18a5.466 5.466 0 0 0-3.813 1.563 10.031 10.031 0 0 0-2.75-1.75A7.042 7.042 0 0 0 23 12c0-3.854-3.146-7-7-7zm0 2c2.773 0 5 2.227 5 5s-2.227 5-5 5-5-2.227-5-5 2.227-5 5-5zm10.5 13c1.945 0 3.5 1.555 3.5 3.5S28.445 27 26.5 27a3.485 3.485 0 0 1-3.5-3.5c0-1.945 1.555-3.5 3.5-3.5z"
      color="#000"
      overflow="visible"
      fontFamily="Bitstream Vera Sans"
    />
  </svg>
);

export default SvgComponent;
