import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  ChangeClassID,
  DeleteClassID,
} from "../../adminScheduleEdit/scheduleEdit";
import { createAlert } from "../../../../features/alert/alertSlice";

import "./editClassID.css";

import EditIcon from "@mui/icons-material/Edit";
import CheckIcon from "@mui/icons-material/Check";
import CloseIcon from "@mui/icons-material/Close";
import DeleteIcon from "@mui/icons-material/Delete";

const EditClassID = ({ id, name, url, schoolID }) => {
  const [editMode, setEditMode] = React.useState(false);
  const [newID, setNewID] = React.useState(id);
  const dispatch = useDispatch();

  const handleEdit = async () => {
    setEditMode(false);
    // if (newID === id) return;

    const data = await ChangeClassID(schoolID, newID, name);
    dispatch(
      createAlert({
        data: data,
        successStatusCode: 201,
        successMessage: "Uspešno ste spremenili ID oddelka",
      })
    );
  };

  const handleDelete = async () => {
    //add confirmation
    const confirm = window.confirm(
      `Ali ste prepričani, da želite izbrisati ta razred(${name})?`
    );
    if (!confirm) return;
    const data = await DeleteClassID(schoolID, name);
    dispatch(
      createAlert({
        data: data,
        successStatusCode: 200,
        successMessage: "Uspešno ste izbrisali razred",
      })
    );
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
