import React from "react";
import { Link } from "react-router-dom";

import MeetingRoomOutlinedIcon from "@mui/icons-material/MeetingRoomOutlined";

import "./selectDoor.css";

const SelectDoor = ({ color, title, to }) => {
  return (
    <Link
      to={to ?? "/admin/door-pass"}
      className="admin-door-pass-dashboard-menu-select-door"
    >
      <MeetingRoomOutlinedIcon
        style={{
          fill: color ?? "#02822D",
        }}
      />
      <p>{title ?? "/"}</p>
    </Link>
  );
};

export default SelectDoor;
