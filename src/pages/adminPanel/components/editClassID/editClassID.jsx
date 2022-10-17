import React from "react";

import "./editClassID.css";

import EditIcon from "@mui/icons-material/Edit";
import CheckIcon from "@mui/icons-material/Check";
import CloseIcon from "@mui/icons-material/Close";

const EditClassID = ({ id, name, setId }) => {
  const [editMode, setEditMode] = React.useState(false);
  const [newID, setNewID] = React.useState(id);

  const handleEdit = () => {
    setEditMode(false);
    setId(newID);
  };

  const discardChanges = () => {
    setEditMode(false);
    setNewID(id);
  };

  return (
    <div className="admin-edit-class-id">
      <p>{name}</p>
      <div className="admin-edit-class-id-editor">
        {!editMode ? <p>{newID}</p> : <input type="text" value={newID} />}
        {!editMode && (
          <button
            className="admin-edit-class-id-editor-btn"
            onClick={() => setEditMode(true)}
          >
            <EditIcon />
          </button>
        )}
        {editMode && (
          <button onClick={handleEdit}>
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
