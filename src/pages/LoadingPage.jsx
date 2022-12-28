import { CircularProgress } from "@mui/material";
import React from "react";
import { selectTheme } from "../features/theme/themeSlice";
import { useSelector } from "react-redux";

const LoadingPage = ({ color }) => {
  const theme = useSelector(selectTheme);

  return (
    <div style={{ width: "100vw", height: "100vh" }} className={theme}>
      <CircularProgress
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%,-50%)",
          color: color,
        }}
      />
    </div>
  );
};

export default LoadingPage;
