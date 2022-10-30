import React from "react";
import { useSelector } from "react-redux";
import { selectUser } from "../../../../features/user/userSlice";

import "./changeStatus.css";

import ChangeStatusItem from "../changeStatusItem/changeStatusItem";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const ChangeStatus = () => {
  const user = useSelector(selectUser);
  const statusName = {
    available: "Dosegljiv/-a",
    away: "Odsoten/-a",
    brb: "Takoj bom nazaj",
    busy: "Zaseden/-a",
    dnd: "Ne moti",
    offline: "Nedosegljiv/-a",
  };
  return (
    <div className="settings-change-status">
      <ChangeStatusItem name={user?.status.id} title={user?.status?.display} />
      <div className="settings-change-status-arrow">
        <KeyboardArrowDownIcon />
      </div>
      <div className="settings-change-status-dropdown">
        {Object.keys(statusName).map((status) => (
          <ChangeStatusItem
            name={status}
            title={statusName[status]}
            key={status}
          />
        ))}
      </div>
    </div>
  );
};

export default ChangeStatus;
