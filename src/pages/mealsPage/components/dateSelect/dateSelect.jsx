import React, { useEffect } from "react";
import useWindowDimensions from "../../../../features/useWindowDimensions";
import DateSelectBox from "../dateSelectBox/dateSelectBox";

import useSideMenu from "../../../../features/sideMenu/useSideMenu";
import DateSelectArrow from "../dateSelectArrow/dateSelectArrow";
import "./dateSelect.css";

const DateSelect = () => {
  const [selectedDateBoxes, setSelectedDateBoxes] = React.useState([]);
  const { width } = useWindowDimensions();
  const [selectedWeek, setSelectedWeek] = React.useState(0);
  const { sideMenuMini } = useSideMenu();
  const [showLeftSlider, setShowLeftSlider] = React.useState(null);
  const [showRightSlider, setShowRightSlider] = React.useState(null);
  const [datesForLeftSlider, setDatesForLeftSlider] = React.useState([]);
  const [datesForRightSlider, setDatesForRightSlider] = React.useState([]);
  const [animationTime, setAnimtionTime] = React.useState(200); // ms

  const generateDateSelectBoxes = (number) => {
    const date = new Date();
    date.setDate(date.getDate() + selectedWeek * number);
    setOldDatesForSlider(selectedDateBoxes);
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
    setNewDatesForSlider(dateSelectBoxes);
  };

  const setOldDatesForSlider = (oldDates) => {
    if (showLeftSlider === "slide-out-to-left") {
      setDatesForLeftSlider(oldDates);
    } else if (showRightSlider === "slide-out-to-right") {
      setDatesForRightSlider(oldDates);
    }
  };

  const setNewDatesForSlider = (newDates) => {
    if (showLeftSlider === "slide-in-from-left") {
      setDatesForLeftSlider(newDates);
    } else if (showRightSlider === "slide-in-from-right") {
      setDatesForRightSlider(newDates);
    }
  };

  const numberOfBoxes = () => {
    const widthOfElement = width - (sideMenuMini ? 60 : 300);
    const usableWidth = widthOfElement - 120;
    const widthOfBox = 120;
    const gapBetweenBoxes = 20;
    const numberOfBoxes = Math.max(
      Math.floor(usableWidth / (widthOfBox + gapBetweenBoxes)),
      1
    );
    generateDateSelectBoxes(numberOfBoxes);
  };

  const changeSelectedWeek = (increment) => {
    if (
      selectedWeek + increment >= 0 &&
      showLeftSlider === null &&
      showRightSlider === null
    ) {
      handleAnimation(increment);
      setSelectedWeek(selectedWeek + increment);
    }
  };

  const handleAnimation = (increment) => {
    if (increment === -1) {
      setShowLeftSlider("slide-in-from-left");
      setShowRightSlider("slide-out-to-right");
    } else {
      setShowLeftSlider("slide-out-to-left");
      setShowRightSlider("slide-in-from-right");
    }
    setTimeout(() => {
      setShowLeftSlider(null);
      setShowRightSlider(null);
    }, animationTime);
  };

  const handleChangeAnimationTime = () => {
    setAnimtionTime(Math.max(200 * (selectedDateBoxes.length / 7), 200));
  };

  useEffect(handleChangeAnimationTime, [selectedDateBoxes]);

  useEffect(numberOfBoxes, [width, selectedWeek, sideMenuMini]);

  return (
    <div className="date-select-meals">
      <DateSelectArrow
        toLeft
        onClick={() => changeSelectedWeek(-1)}
        disabled={selectedWeek === 0}
      />
      <div className="date-select-boxes-meals">
        {selectedDateBoxes.map((dateBox, i) => (
          <DateSelectBox
            key={i}
            date={dateBox.date}
            hidden={showLeftSlider || showRightSlider}
          />
        ))}
        {showLeftSlider ? (
          <div
            className="date-select-boxes-meals-old-left"
            style={{
              animation: `${showLeftSlider} ${animationTime}ms ease-in-out`,
            }}
          >
            {datesForLeftSlider.map((dateBox, i) => (
              <DateSelectBox key={i} date={dateBox.date} />
            ))}
          </div>
        ) : (
          <></>
        )}
        {showRightSlider ? (
          <div
            className="date-select-boxes-meals-old-right"
            style={{
              animation: `${showRightSlider} ${animationTime}ms ease-in-out`,
            }}
          >
            {datesForRightSlider.map((dateBox, i) => (
              <DateSelectBox key={i} date={dateBox.date} />
            ))}
          </div>
        ) : (
          <></>
        )}
      </div>
      <DateSelectArrow onClick={() => changeSelectedWeek(1)} />
    </div>
  );
};

export default DateSelect;
