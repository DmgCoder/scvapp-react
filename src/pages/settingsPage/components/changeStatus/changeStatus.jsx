import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectTheme } from "../../../../features/theme/themeSlice";
import { createAlert } from "../../../../features/alert/alertSlice";

import "./changeStatus.css";

import ChangeStatusItem from "../changeStatusItem/changeStatusItem";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { changeUserStatus } from "../../settingsAPI";
import { useUser } from "../../../../features/user/userHook";

const ChangeStatus = () => {
  const { user, refresh } = useUser();
  const theme = useSelector(selectTheme);
  const [showDropdown, setShowDropdown] = React.useState(false);
  const dispatch = useDispatch();

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
    const data = await changeUserStatus(status);
    if (data.status === 200) {
      refresh();
    }
    setShowDropdown(false);
    dispatch(
      createAlert({
        data: data,
        successMessage: "Status uspešno spremenjen",
        successStatusCode: 200,
      })
    );
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
