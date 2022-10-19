import React from "react";
import { useSelector } from "react-redux";
import { selectTheme } from "../../../../features/theme/themeSlice";
import StyledTextField from "../../../../components/StyledTextField";

import "./addClass.css";

import AddIcon from "@mui/icons-material/Add";

const AddClass = () => {
  const theme = useSelector(selectTheme);
  const [showEdit, setShowEdit] = React.useState(false);
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
          />
          <StyledTextField
            id="standard-basic"
            label="ID oddelka"
            variant="standard"
            className="meals-login-form-input"
            fontcolor="currentColor"
            activecolor="#3f87f3"
          />
          <div>
            <button>Ustvari</button>
            <button>Prekliči</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AddClass;
