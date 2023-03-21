import React from "react";
import { useSelector } from "react-redux";
import { selectTheme } from "../../../../features/theme/themeSlice";

import "./changeStatus.css";

import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import useAlert from "../../../../features/alert/useAlert";
import { useUser } from "../../../../features/user/userHook";
import { changeUserStatus } from "../../settingsAPI";
import ChangeStatusItem from "../changeStatusItem/changeStatusItem";

const ChangeStatus = () => {
  const { user, refresh } = useUser();
  const theme = useSelector(selectTheme);
  const [showDropdown, setShowDropdown] = React.useState(false);
  const { createAlert } = useAlert();

  const statusName = {
    available: "Dosegljiv/-a",
    away: "Odsoten/-a",
    brb: "Takoj bom nazaj",
    busy: "Zaseden/-a",
    dnd: "Ne moti",
    offline: "Nedosegljiv/-a",
  };

  const handleToggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const handleStatusChange = async (status) => {
    const data = await createAlert(changeUserStatus(status),"Spreminjanje statusa");
    if (data.status === 200) {
      refresh();
    }
    setShowDropdown(false);
  };

  return (
    <div
      className={`settings-change-status ${
        showDropdown ? "settings-change-status-show-dropdown" : ""
      }`}
    >
      <ChangeStatusItem title={user?.status?.display} />
      <div
        className="settings-change-status-arrow"
        onClick={handleToggleDropdown}
      >
        <KeyboardArrowDownIcon />
      </div>
      <div className={`settings-change-status-dropdown ${theme}`}>
        {Object.keys(statusName).map((status) => (
          <ChangeStatusItem
            name={status}
            title={statusName[status]}
            key={status}
            onClick={handleStatusChange}
          />
        ))}
      </div>
    </div>
  );
};

export default ChangeStatus;
