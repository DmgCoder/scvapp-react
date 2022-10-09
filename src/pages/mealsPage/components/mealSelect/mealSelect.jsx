import React from "react";
import MealSelectBox from "../mealSelectBox/mealSelectBox";

import "./mealSelect.css";

const MealSelect = () => {
  return (
    <div className="meal-select">
      <MealSelectBox selected />
      <MealSelectBox />
      <MealSelectBox />
      <MealSelectBox />
      <MealSelectBox />
      <MealSelectBox />
      <MealSelectBox />
    </div>
  );
};

export default MealSelect;
