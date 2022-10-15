import React from "react";
import { useSelector } from "react-redux";
import { selectTheme } from "../../../features/theme/themeSlice";

import "./adminScheduleEdit.css";

const AdminScheduleEdit = () => {
  const theme = useSelector(selectTheme);
  return <div className={`admin-schedule-edit ${theme}`}>adminScheduleEdit</div>;
};

export default AdminScheduleEdit;
