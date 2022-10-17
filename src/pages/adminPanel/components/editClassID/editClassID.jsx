import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { ChangeClassID } from "../../adminScheduleEdit/scheduleEdit";
import { setAlert } from "../../../../features/alert/alertSlice";

import "./editClassID.css";

import EditIcon from "@mui/icons-material/Edit";
import CheckIcon from "@mui/icons-material/Check";
import CloseIcon from "@mui/icons-material/Close";

const EditClassID = ({ id, name, url, schoolID }) => {
  const [editMode, setEditMode] = React.useState(false);
  const [newID, setNewID] = React.useState(id);
  const dispatch = useDispatch();

  const handleEdit = async () => {
    setEditMode(false);
    if (newID === id) return;

    const data = await ChangeClassID(schoolID, newID, name);
    if (data.status === 201) {
      dispatch(
        setAlert({
          type: "success",
          message: "ID je bil uspešno spremenjen.",
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
  };

  const discardChanges = () => {
    setEditMode(false);
    setNewID(id);
  };

  useEffect(() => {
    setNewID(id);
  }, [id]);

  return (
    <div className="admin-edit-class-id">
      <p>{name}</p>
      <div className="admin-edit-class-id-editor">
        {!editMode ? (
          <a href={`${url}${newID}`} target="_blank" rel="noreferrer">
            {newID}
          </a>
        ) : (
          <input
            type="text"
            value={newID}
            onChange={(e) => setNewID(e.target.value)}
          />
        )}
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
