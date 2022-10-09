import React from "react";
import { useSelector } from "react-redux";
import { Route } from "react-router";
import { selectTheme } from "../../features/theme/themeSlice";

import "./homePage.css";

const HomePage = () => {
  const theme = useSelector(selectTheme);

  return <div className={`${theme} homePage`}>{/*Side menu*/}</div>;
};

export default HomePage;
