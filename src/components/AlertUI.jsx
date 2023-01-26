import React from "react";
import { Alert, AlertTitle } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { clearAlert, selectAlert } from "../features/alert/alertSlice";
import { useEffect } from "react";
import { useState } from "react";

const AlertUI = () => {
  const alertObj = useSelector(selectAlert);
  const dispatch = useDispatch();
  const [localTimeOut, setLocalTimeout] = useState(null);

  useEffect(() => {
    if (alertObj.show) {
      setLocalTimeout(
        setTimeout(() => {
          dispatch(clearAlert());
        }, 3000)
      );
    }
  }, [alertObj.show]);

  const closeAlertManually = () => {
    dispatch(clearAlert());
    if (localTimeOut) {
      clearTimeout(localTimeOut);
      setLocalTimeout(null);
    }
  };

  return (
    <>
      {alertObj?.show && (
        <Alert
          severity={alertObj?.type}
          style={{
            position: "absolute",
            bottom: "20px",
            right: "0px",
            maxWidth: "calc(100% - 65px)",
          }}
          onClose={closeAlertManually}
        >
          <AlertTitle>{alertObj?.title}</AlertTitle>
          {alertObj?.message}
        </Alert>
      )}
    </>
  );
};

export default AlertUI;
