import React from "react";

import MeetingRoomOutlinedIcon from "@mui/icons-material/MeetingRoomOutlined";

import "./selectDoor.css";

const SelectDoor = ({ color, title }) => {
  return (
    <div className="admin-door-pass-dashboard-menu-select-door">
      <MeetingRoomOutlinedIcon
        style={{
          fill: color ?? "#02822D",
        }}
      />
      <p>{title ?? "/"}</p>
    </div>
  );
};

export default SelectDoor;
