import React from "react";
import TopMenu from "./components/topMenu/topMenu";
import DateSelect from "./components/dateSelect/dateSelect";
import { useSelector } from "react-redux";
import { selectTheme } from "../../features/theme/themeSlice";

import "./mealsMain.css";
import MealSelect from "./components/mealSelect/mealSelect";

const MealsMain = () => {
  const theme = useSelector(selectTheme);

  return (
    <div className={`meals-main ${theme}`}>
      <TopMenu />
      <DateSelect />
      <MealSelect />
    </div>
  );
};

export default MealsMain;
