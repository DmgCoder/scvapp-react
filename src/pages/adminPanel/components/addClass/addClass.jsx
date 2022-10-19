import React from "react";
import { useSelector } from "react-redux";
import { selectTheme } from "../../../../features/theme/themeSlice";
import StyledTextField from "../../../../components/StyledTextField";
import { CreateClass } from "../../adminScheduleEdit/scheduleEdit";
import { useDispatch } from "react-redux";
import { createAlert } from "../../../../features/alert/alertSlice";

import "./addClass.css";

import AddIcon from "@mui/icons-material/Add";

const AddClass = ({ schoolID, reloadData }) => {
  const theme = useSelector(selectTheme);
  const [showEdit, setShowEdit] = React.useState(false);
  const [className, setClassName] = React.useState("");
  const [classID, setClassID] = React.useState("");
  const dispatch = useDispatch();

  const handleCancel = () => {
    setShowEdit(false);
    setClassName("");
    setClassID("");
  };

  const handleAdd = async () => {
    setShowEdit(false);
    const data = await CreateClass(schoolID, className, classID);
    dispatch(
      createAlert({
        data: data,
        successMessage: "Oddelek je bil uspešno ustvarjen",
        successStatusCode: 201,
      })
    );
    setClassName("");
    setClassID("");
    reloadData();
  };

  return (
    <div className="admin-edit-schedule-add-class">
      <button onClick={() => setShowEdit(true)}>
        <AddIcon />
      </button>
      {showEdit && (
        <div className={`admin-edit-schedule-add-class-editor ${theme}`}>
          <StyledTextField
            id="standard-basic"
            label="Ime oddelka"
            variant="standard"
            className="meals-login-form-input"
            fontcolor="currentColor"
            activecolor="#3f87f3"
            value={className}
            onChange={(e) => setClassName(e.target.value)}
          />
          <StyledTextField
            id="standard-basic"
            label="ID oddelka"
            variant="standard"
            className="meals-login-form-input"
            fontcolor="currentColor"
            activecolor="#3f87f3"
            value={classID}
            onChange={(e) => setClassID(e.target.value)}
          />
          <div>
            <button onClick={handleAdd}>Ustvari</button>
            <button onClick={handleCancel}>Prekliči</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AddClass;
