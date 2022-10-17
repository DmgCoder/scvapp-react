import React from "react";
import { useSelector } from "react-redux";
import { selectTheme } from "../../../features/theme/themeSlice";
import SelectSchoolDropdown from "../components/selectSchoolDropdown/selectSchoolDropdown";
import EditUrl from "../components/editUrl/editUrl";

import "./adminScheduleEdit.css";
import EditClassesIDs from "../components/editClassesIDs/editClassesIDs";
import { GetScheduleData } from "./scheduleEdit";

const AdminScheduleEdit = () => {
  const theme = useSelector(selectTheme);
  const [selectedSchool, setSelectedSchool] = React.useState(null);
  const [url, setUrl] = React.useState("");
  const [allData, setAllData] = React.useState(null);
  const selectSchool = (e) => {
    const schoolID = e.target.id;
    const school = allData.find((school) => school.id === schoolID);
    if (school) {
      setSelectedSchool(school);
      setUrl(school.mainLink);
    }
  };

  const schools = {
    ERS: "ERŠ",
    SSD: "ŠSD",
    SSGO: "ŠSGO",
    GIM: "GIM",
  };

  const changeUrl = (url) => {
    setUrl(url);
  };

  const handleLoad = async () => {
    const data = await GetScheduleData();
    setAllData(data);
  };

  React.useEffect(() => {
    handleLoad();
  }, []);

  return (
    <div className={`admin-schedule-edit ${theme}`}>
      <div className="admin-schedule-edit-select-school">
        <p>Izbrana šola:</p>
        <SelectSchoolDropdown
          schools={schools}
          selectedSchool={selectedSchool?.id}
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
