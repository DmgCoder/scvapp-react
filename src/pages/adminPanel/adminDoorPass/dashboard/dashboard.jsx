import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { selectTheme } from "../../../../features/theme/themeSlice";
import SelectDoor from "../../components/selectDoor/selectDoor";
import { GetAllDoorPasses } from "../adminDoorPassAPI";

import "./dashboard.css";

const Dashboard = () => {
  const theme = useSelector(selectTheme);
  const [doorPasses, setDoorPasses] = React.useState([]);

  const handleLoad = async () => {
    const data = await GetAllDoorPasses();
    if (data) {
      setDoorPasses(data);
    }
  };

  useEffect(() => {
    handleLoad();
  }, []);

  return (
    <div className={`admin-door-pass-dashboard ${theme}`}>
      <div className="admin-door-pass-dashboard-menu">
        <p>Vrata:</p>
        <div className="admin-door-pass-dashboard-menu-doors">
          {doorPasses.map((doorPass) => (
            <SelectDoor key={doorPass.id} title={doorPass.name_id} />
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
