import React, { useEffect, useState } from "react";

import { Alert, AlertTitle, Button } from "@mui/material";

export default function ShowAlert(props) {
  const [alertStyle, setAlertStyle] = useState({
    display: "none",
    transform: "translateX(200%)",
  });

  const [timeOutForClose, setTimeOutForClose] = useState();

  useEffect(() => {
    if (props.show) {
      setAlertStyle({
        display: "",
        transform: "translateX(200%)",
      });
      // setTimeout(()=>{
      // },1250)
      clearTimeout(timeOutForClose);
      setTimeout(() => {
        setAlertStyle({
          display: "",
          transform: "",
        });
      }, 50);
    } else {
      setAlertStyle({
        display: "",
        transform: "translateX(200%)",
      });
      setTimeOutForClose(
        setTimeout(() => {
          setAlertStyle({
            display: "none",
            transform: "translateX(200%)",
          });
        }, 1200)
      );
    }
  }, [props.show]);

  function closeAlertManualy() {
    if (props.closeAlert) {
      props.closeAlert();
    }
  }

  return (
    <Alert
      action={
        props.closeAlert && (
          <Button color="inherit" size="small" onClick={closeAlertManualy}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="currentColor"
              className="bi bi-x"
              viewBox="0 0 16 16"
            >
              <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
            </svg>
          </Button>
        )
      }
      severity={props.severity}
      style={{
        position: "absolute",
        bottom: 50,
        right: 10,
        transform: alertStyle.transform,
        display: alertStyle.display,
        transition: "transform 1.2s ease-in-out",
      }}
    >
      <AlertTitle>{props.title}</AlertTitle>
      {props.text}
    </Alert>
  );
}
