import React from "react";
import { useSelector } from "react-redux";
import { selectDoorPasses } from "../../../../features/doorPasses/doorPassesSlice";
import { selectTheme } from "../../../../features/theme/themeSlice";
import AdminBackBtn from "../../components/adminBackBtn";
import SelectDoor from "../../components/selectDoor/selectDoor";

import "./dashboard.css";

import AccessTimeIcon from "@mui/icons-material/AccessTime";
import ControlCameraIcon from "@mui/icons-material/ControlCamera";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const theme = useSelector(selectTheme);
  const doorPasses = useSelector(selectDoorPasses);

  return (
    <div className={`admin-door-pass-dashboard ${theme}`}>
      <div className="admin-door-pass-dashboard-menu">
        <AdminBackBtn />
        <div className="admin-door-pass-dashboard-menu-icons">
          <AccessTimeIcon titleAccess="Time profiles" />
        </div>
        <p>Vrata:</p>
        <div className="admin-door-pass-dashboard-menu-doors">
          {doorPasses &&
            doorPasses.map((doorPass) => (
              <SelectDoor
                key={doorPass.id}
                title={doorPass.name_id}
                to={`/admin/door-pass/show/${doorPass.name_id}`}
              />
            ))}
          <SelectDoor
            title={"+"}
            color={theme === "dark-theme" ? "#D1D1D1" : "#a3a2a2"}
            to={"/admin/door-pass/create"}
          />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
