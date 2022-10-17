import React from "react";
import { useSelector } from "react-redux";
import { selectTheme } from "../../../features/theme/themeSlice";
import SelectSchoolDropdown from "../components/selectSchoolDropdown/selectSchoolDropdown";
import EditUrl from "../components/editUrl/editUrl";

import "./adminScheduleEdit.css";
import EditClassesIDs from "../components/editClassesIDs/editClassesIDs";

const AdminScheduleEdit = () => {
  const theme = useSelector(selectTheme);
  const [selectedSchool, setSelectedSchool] = React.useState("ERS");
  const [url, setUrl] = React.useState("");

  const schools = {
    GIM: "GIM",
    ERS: "ERŠ",
    SSD: "ŠSD",
    SSGO: "ŠSGO",
  };

  const selectSchool = (e) => {
    setSelectedSchool(e.target.id);
  };

  const changeUrl = (url) => {
    setUrl(url);
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
      <div className="admin-schedule-edit-link">
        <p>Univerzalni link:</p>
        <EditUrl url={url} changeUrl={changeUrl} />
      </div>
      <EditClassesIDs />
    </div>
  );
};

export default AdminScheduleEdit;
