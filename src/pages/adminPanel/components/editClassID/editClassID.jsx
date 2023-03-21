import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  ChangeClassID,
  DeleteClassID,
} from "../../adminScheduleEdit/scheduleEdit";

import "./editClassID.css";

import EditIcon from "@mui/icons-material/Edit";
import CheckIcon from "@mui/icons-material/Check";
import CloseIcon from "@mui/icons-material/Close";
import DeleteIcon from "@mui/icons-material/Delete";
import useAlert from "../../../../features/alert/useAlert";

const EditClassID = ({ id, name, url, schoolID, reloadData }) => {
  const [editMode, setEditMode] = React.useState(false);
  const [newID, setNewID] = React.useState(id);
  const { createAlert } = useAlert();

  const handleEdit = async () => {
    setEditMode(false);
    if (newID === id) return;

    await createAlert(
      ChangeClassID(schoolID, newID, name),
      "Uspešno ste spremenili ID oddelka"
    );
    reloadData();
  };

  const handleDelete = async () => {
    //add confirmation
    const confirm = window.confirm(
      `Ali ste prepričani, da želite izbrisati ta razred(${name})?`
    );
    if (!confirm) return;
    const data = await createAlert(
      DeleteClassID(schoolID, name),
      "Uspešno ste izbrisali razred"
    );
    reloadData();
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
      <div
        className={`admin-edit-class-id-editor ${
          editMode ? "admin-edit-class-id-editor-edit" : ""
        }`}
      >
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
          <div className="admin-edit-class-id-editor-btns">
            <button onClick={() => setEditMode(true)}>
              <EditIcon />
            </button>
            <button onClick={handleDelete}>
              <DeleteIcon />
            </button>
          </div>
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
