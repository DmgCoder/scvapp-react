import React from "react";
import { RenameDoorPass } from "../../adminDoorPass/adminDoorPassAPI";
import { useDispatch } from "react-redux";
import { createAlert } from "../../../../features/alert/alertSlice";
import { useDoorPasses } from "../../../../features/doorPasses/useDoorPasses";
import { useNavigate } from "react-router";

import "./showTitle.css";
import StyledTextField from "../../../../components/StyledTextField";

import EditIcon from "@mui/icons-material/Edit";
import { useEffect } from "react";
import CheckIcon from "@mui/icons-material/Check";
import CloseIcon from "@mui/icons-material/Close";

const ShowTitle = ({ doorPass }) => {
  const [edit, setEdit] = React.useState(false);
  const [newName, setNewName] = React.useState("");
  const [showErrorForName, setShowErrorForName] = React.useState(null);
  const { refresh, doorPasses } = useDoorPasses();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    if (doorPass) setNewName(doorPass.name_id);
  }, [doorPass]);

  const handleEdit = async () => {
    if (!doorPass) return;
    const data = await RenameDoorPass(doorPass.code, newName);
    dispatch(
      createAlert({
        data: data,
        successMessage: "Ime je bilo spremenjeno",
        successStatusCode: 200,
      })
    );
    setEdit(false);
    refresh();
    navigate(`/admin/door-pass/show/${newName}`);
  };

  const handleCancel = () => {
    setEdit(false);
    setNewName(doorPass.name_id);
  };

  const handleNameChange = (e) => {
    setNewName(e.target.value);
    const nameExists = doorPasses.find((doorPass) => {
      return doorPass.name_id === e.target.value;
    });
    if (nameExists && doorPass.name_id !== e.target.value) {
      setShowErrorForName("Ime že obstaja");
    } else {
      setShowErrorForName(null);
    }
  };

  return (
    <div className="admin-door-pass-show-content-header-title">
      {edit ? (
        <StyledTextField
          variant="standard"
          color="primary"
          type="text"
          error={showErrorForName !== null}
          helperText={showErrorForName}
          value={newName}
          onChange={handleNameChange}
          fontcolor="currentColor"
        />
      ) : (
        <p>{newName}</p>
      )}
      {!edit ? <EditIcon onClick={() => setEdit(true)} /> : <></>}
      {edit ? <CheckIcon onClick={handleEdit} /> : <></>}
      {edit ? <CloseIcon onClick={handleCancel} /> : <></>}
    </div>
  );
};

export default ShowTitle;
