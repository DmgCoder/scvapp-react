import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectTheme } from "../../../features/theme/themeSlice";
import { setAlert } from "../../../features/alert/alertSlice";
import SelectSchoolDropdown from "../components/selectSchoolDropdown/selectSchoolDropdown";
import EditUrl from "../components/editUrl/editUrl";

import "./adminScheduleEdit.css";
import EditClassesIDs from "../components/editClassesIDs/editClassesIDs";
import { GetScheduleData, ChangeScheduleURL } from "./scheduleEdit";

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
      if (data.status === 200) {
        dispatch(
          setAlert({
            type: "success",
            message: "Povezava je bila uspešno spremenjena.",
            title: "Uspešno",
            show: true,
          })
        );
      } else {
        const message =
          data.data.message || "Prišlo je do napake. Poskusite znova.";
        dispatch(
          setAlert({
            type: "error",
            message: message,
            title: "Napaka",
            show: true,
          })
        );
      }
    }
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
      <EditClassesIDs classes={selectedSchool?.classes} url={url} />
    </div>
  );
};

export default AdminScheduleEdit;
