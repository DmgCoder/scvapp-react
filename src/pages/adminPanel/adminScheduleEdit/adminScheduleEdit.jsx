import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectTheme } from "../../../features/theme/themeSlice";
import { createAlert } from "../../../features/alert/alertSlice";
import SelectSchoolDropdown from "../components/selectSchoolDropdown/selectSchoolDropdown";
import EditUrl from "../components/editUrl/editUrl";
import { GetScheduleData, ChangeScheduleURL } from "./scheduleEdit";
import AdminBackBtn from "../components/adminBackBtn";

import "./adminScheduleEdit.css";
import EditClassesIDs from "../components/editClassesIDs/editClassesIDs";

const AdminScheduleEdit = () => {
  const theme = useSelector(selectTheme);
  const [selectedSchool, setSelectedSchool] = React.useState(null);
  const [url, setUrl] = React.useState("");
  const [allData, setAllData] = React.useState(null);
  const dispatch = useDispatch();

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

  const changeUrl = async (url) => {
    if (selectedSchool) {
      setUrl(url);
      const data = await ChangeScheduleURL(selectedSchool.id, url);
      dispatch(
        createAlert({
          data: data,
          successStatusCode: 200,
          successMessage: "Povezava je bila uspešno spremenjena.",
        })
      );
      handleLoad();
    }
  };

  const handleLoad = async () => {
    const data = await GetScheduleData();
    setAllData(data);
  };

  React.useEffect(() => {
    handleLoad();
  }, []);

  React.useEffect(() => {
    if (selectedSchool?.id) {
      selectSchool({ target: { id: selectedSchool.id } });
    }
  }, [allData]);

  return (
    <div className={`admin-schedule-edit ${theme}`}>
      <AdminBackBtn />
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
      <EditClassesIDs
        classes={selectedSchool?.classes}
        url={url}
        schoolID={selectedSchool?.id}
        reloadData={handleLoad}
      />
    </div>
  );
};

export default AdminScheduleEdit;
