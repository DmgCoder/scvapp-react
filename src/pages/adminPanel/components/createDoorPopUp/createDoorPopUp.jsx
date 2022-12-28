import React from "react";
import { useSelector } from "react-redux";
import { selectTheme } from "../../../../features/theme/themeSlice";
import { useDispatch } from "react-redux";
import { setAlert } from "../../../../features/alert/alertSlice";

import "./createDoorPopUp.css";

const CreateDoorPopUp = ({ code, setCode, close }) => {
  const theme = useSelector(selectTheme);
  const dispatch = useDispatch();

  const handleCopyData = () => {
    navigator.clipboard.writeText(code);
    dispatch(
      setAlert({
        type: "success",
        message: "Podatki so bili uspešno kopirani!",
        title: "Uspešno kopirano!",
        show: true,
      })
    );
  };
  const handleCancel = () => {
    setCode(null);
    close();
  };
  return (
    <>
      {code && (
        <div className={`admin-create-door-popup ${theme}`}>
          <div id="texts">
            <p id="title">Vrata usepešno dodana!</p>
            <p id="text">Tvoj skrivni ključ je:{code}</p>
          </div>
          <div id="buttons">
            <button onClick={handleCopyData}>Kopiraj</button>
            <button onClick={handleCancel}>Zapri</button>
          </div>
        </div>
      )}
    </>
  );
};

export default CreateDoorPopUp;
