import React from "react";
import TopMenu from "./components/topMenu/topMenu";
import DateSelect from "./components/dateSelect/dateSelect";
import { useSelector } from "react-redux";
import { selectTheme } from "../../features/theme/themeSlice";

import "./mealsMain.css";

const MealsMain = () => {
  const theme = useSelector(selectTheme);

  return (
    <div className={`meals-main ${theme}`}>
      <TopMenu />
      <DateSelect />
      {/*Meal list*/}
    </div>
  );
};

export default MealsMain;
