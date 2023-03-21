import React from "react";
import { useSelector } from "react-redux";
import { selectTheme } from "../../../../features/theme/themeSlice";

import "./createDoorPopUp.css";
import useAlert from "../../../../features/alert/useAlert";

const CreateDoorPopUp = ({ code, setCode, close }) => {
  const theme = useSelector(selectTheme);
  const { setAlert } = useAlert();

  const handleCopyData = () => {
    navigator.clipboard.writeText(code);
    setAlert("Podatki so bili uspešno kopirani!", "success");
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
