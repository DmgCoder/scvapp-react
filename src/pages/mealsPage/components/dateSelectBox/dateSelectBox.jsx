import React from "react";
import { useSelector } from "react-redux";
import { selectTheme } from "../../../../features/theme/themeSlice";

import "./dateSelectBox.css";

const DateSelectBox = ({ selected, title, date, dateName }) => {
  const theme = useSelector(selectTheme);
  return (
    <div className={`date-select-box-meals ${theme}`}>
      <p>{title || "\n"}</p>
      <p>
        <b>{dateName}</b>
      </p>
      <p>{date}</p>
    </div>
  );
};

export default DateSelectBox;
