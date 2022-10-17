import React from "react";
import { useSelector } from "react-redux";
import { selectTheme } from "../../../../features/theme/themeSlice";

import "./editClassesIDs.css";

import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import EditClassID from "../editClassID/editClassID";

const EditClassesIDs = () => {
  const theme = useSelector(selectTheme);
  return (
    <div className={`admin-edit-classes-ids ${theme}`}>
      <div className="admin-edit-classes-ids-title">
        <p>Razred</p>
        <p>ID</p>
      </div>
      <EditClassID />
      <div className="admin-edit-classes-ids-navigator">
        <p>Stran 31 od 41</p>
        <button>
          <ChevronLeftIcon />
        </button>
        <button>
          <ChevronRightIcon />
        </button>
      </div>
    </div>
  );
};

export default EditClassesIDs;
