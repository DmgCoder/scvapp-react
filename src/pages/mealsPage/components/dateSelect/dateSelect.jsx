import React, { useEffect, useRef } from "react";
import DateSelectBox from "../dateSelectBox/dateSelectBox";
import useWindowDimensions from "../../../../features/useWindowDimensions";

import "./dateSelect.css";
import DateSelectArrow from "../dateSelectArrow/dateSelectArrow";

const DateSelect = () => {
  const [selectedDateBoxes, setSelectedDateBoxes] = React.useState([]);
  const { width } = useWindowDimensions();
  const [selectedWeek, setSelectedWeek] = React.useState(0);
  const scrollRef = useRef();

  const generateDateSelectBoxes = (number) => {
    const date = new Date();
    date.setDate(date.getDate() + selectedWeek * number);
    const startDay = new Date(date);
    // startDay.setDate(date.getDate() - dayInWeek + 1);
    let dateSelectBoxes = [];
    for (let i = 0; i < number; i++) {
      let newDate = new Date(startDay);
      newDate.setDate(startDay.getDate() + i);
      dateSelectBoxes.push({
        date: newDate,
      });
    }
    setSelectedDateBoxes(dateSelectBoxes);
  };

  const numberOfBoxes = () => {
    const widthOfElement = scrollRef?.current.offsetWidth ?? width - 300;
    const usableWidth = widthOfElement - 120;
    const widthOfBox = 120;
    const gapBetweenBoxes = 20;
    const numberOfBoxes = Math.floor(
      usableWidth / (widthOfBox + gapBetweenBoxes)
    );
    generateDateSelectBoxes(numberOfBoxes);
  };

  const changeSelectedWeek = (increment) => {
    if (selectedWeek + increment >= 0) {
      setSelectedWeek(selectedWeek + increment);
    }
  };

  useEffect(numberOfBoxes, [width, selectedWeek]);

  return (
    <div className="date-select-meals" ref={scrollRef}>
      <DateSelectArrow
        toLeft
        onClick={() => changeSelectedWeek(-1)}
        disabled={selectedWeek === 0}
      />
      <div className="date-select-boxes-meals">
        {selectedDateBoxes.map((dateBox, i) => (
          <DateSelectBox key={i} date={dateBox.date} />
        ))}
      </div>
      <DateSelectArrow onClick={() => changeSelectedWeek(1)} />
    </div>
  );
};

export default DateSelect;
