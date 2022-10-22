import React from "react";
import { Link } from "react-router-dom";

import ArrowBackIcon from "@mui/icons-material/ArrowBack";

const AdminBackBtn = ({ to }) => {
  return (
    <Link
      to={to ?? "/admin"}
      style={{
        position: "absolute",
        top: "10px",
        left: "10px",
        color: "white",
        textDecoration: "none",
      }}
      title="Nazaj"
    >
      <ArrowBackIcon />
    </Link>
  );
};

export default AdminBackBtn;
