import React from "react";
import { useSelector } from "react-redux";
import { selectTheme } from "../../../../features/theme/themeSlice";

import "./activityLogDoorPass.css";

const ActivityLogDoorPass = () => {
  const theme = useSelector(selectTheme);
  return (
    <div className={`admin-activity-log-door-pass ${theme}`}>
      <p>8.53: C502, ID</p>
      <p>8.53: C502, ID</p>
      <p>8.53: C502, ID</p>
      <p>8.53: C502, ID</p>
    </div>
  );
};

export default ActivityLogDoorPass;
