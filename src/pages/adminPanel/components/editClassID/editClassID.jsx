import React from "react";

import "./editClassID.css";

import EditIcon from "@mui/icons-material/Edit";
import CheckIcon from "@mui/icons-material/Check";
import CloseIcon from "@mui/icons-material/Close";

const EditClassID = () => {
  const [editMode, setEditMode] = React.useState(false);

  const discardChanges = () => {
    setEditMode(false);
  };

  return (
    <div className="admin-edit-class-id">
      <p>1.TRB</p>
      <div className="admin-edit-class-id-editor">
        {!editMode ? <p>223456</p> : <input type="text" value="223456" />}
        {!editMode && (
          <button
            className="admin-edit-class-id-editor-btn"
            onClick={() => setEditMode(true)}
          >
            <EditIcon />
          </button>
        )}
        {editMode && (
          <button>
            <CheckIcon />
          </button>
        )}
        {editMode && (
          <button onClick={discardChanges}>
            <CloseIcon />
          </button>
        )}
      </div>
    </div>
  );
};

export default EditClassID;
