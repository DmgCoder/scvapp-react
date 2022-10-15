import React from "react";
import { useSelector } from "react-redux";
import { selectTheme } from "../../../features/theme/themeSlice";
import SelectSchoolDropdown from "../components/selectSchoolDropdown/selectSchoolDropdown";

import "./adminScheduleEdit.css";

const AdminScheduleEdit = () => {
  const theme = useSelector(selectTheme);
  const [selectedSchool, setSelectedSchool] = React.useState("ERS");

  const schools = {
    GIM: "GIM",
    ERS: "ERŠ",
    SSD: "ŠSD",
    SSGO: "ŠSGO",
  };

  const selectSchool = (e) => {
    setSelectedSchool(e.target.id);
  };

  return (
    <div className={`admin-schedule-edit ${theme}`}>
      <div className="admin-schedule-edit-select-school">
        <p>Izbrana šola:</p>
        <SelectSchoolDropdown
          schools={schools}
          selectedSchool={selectedSchool}
          selectSchool={selectSchool}
        />
      </div>
    </div>
  );
};

export default AdminScheduleEdit;
