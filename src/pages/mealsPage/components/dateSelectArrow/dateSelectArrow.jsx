import React from "react";
import { useSelector } from "react-redux";
import { selectTheme } from "../../../../features/theme/themeSlice";

import "./dateSelectArrow.css";

const DateSelectArrow = ({ onClick, toLeft, disabled }) => {
  const theme = useSelector(selectTheme);

  return (
    <button
      onClick={onClick}
      className={`date-select-arrow-meals ${theme}`}
      style={toLeft && { transform: "rotate(180deg)" }}
      disabled={disabled ?? false}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="35"
        fill="currentColor"
        className="bi bi-chevron-right"
        viewBox="0 0 16 16"
      >
        <path
          fillRule="evenodd"
          d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
        />
      </svg>
    </button>
  );
};

export default DateSelectArrow;
