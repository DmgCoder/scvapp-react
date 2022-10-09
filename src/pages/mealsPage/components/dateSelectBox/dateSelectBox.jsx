import React, { useState } from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { selectTheme } from "../../../../features/theme/themeSlice";

import "./dateSelectBox.css";

const DateSelectBox = ({ selected, date }) => {
  const theme = useSelector(selectTheme);
  const [displayDate, setDisplayDate] = useState(null);
  const [title, setTitle] = useState(null);
  const [dayInWeekNumber, setDayInWeekNumber] = useState(null);

  const tabelOfDaysInWeek = [
    "Nedelja",
    "Ponedeljek",
    "Torek",
    "Sreda",
    "Četrtek",
    "Petek",
    "Sobota",
  ];
  const displayData = () => {
    const dateNow = new Date();
    const dayInWeek = date?.getDay();
    const dayInMonth = date?.getDate();
    const month = date?.getMonth() + 1;
    const year = date?.getFullYear();
    setDayInWeekNumber(dayInWeek);
    const monthInString = month < 10 ? `0${month}` : month;
    setDisplayDate(`${dayInMonth}.${monthInString}.${year}`);
    if (dateNow.getMonth() + 1 === month && dateNow.getFullYear() === year) {
      if (dateNow.getDate() === dayInMonth) {
        setTitle("DANES");
      } else if (dateNow.getDate() === dayInMonth - 1) {
        setTitle("JUTRI");
      } else {
        setTitle(null);
      }
    }
  };
  useEffect(displayData, [date]);
  return (
    <div
      className={`date-select-box-meals ${theme} ${selected && "box-selected"}`}
    >
      <p>{title ?? <span>&nbsp;&nbsp;</span>}</p>
      <p>
        <b>
          {tabelOfDaysInWeek[dayInWeekNumber]?.toUpperCase() ?? (
            <span>&nbsp;&nbsp;</span>
          )}
        </b>
      </p>
      <p>{displayDate ?? <span>&nbsp;&nbsp;</span>}</p>
    </div>
  );
};

export default DateSelectBox;
