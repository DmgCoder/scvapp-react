import React from "react";
import { useSelector } from "react-redux";
import { selectUser } from "../features/user/userSlice";

import ERSLogo from "../assets/slike_malica/school/ers.svg";
import GIMLogo from "../assets/slike_malica/school/gim.svg";
import SSDLogo from "../assets/slike_malica/school/ssd.svg";
import MICLogo from "../assets/slike_malica/school/mic.svg";
import DSDLogo from "../assets/slike_malica/school/dsd.svg";
import SSGOLogo from "../assets/slike_malica/school/ssgo.svg";
import VSSLogo from "../assets/slike_malica/school/vss.svg";
import { CircularProgress } from "@mui/material";
import { useEffect } from "react";

const SchoolImg = ({ className, style }) => {
  const user = useSelector(selectUser);
  const [schoolLogo, setSchoolLogo] = React.useState(null);
  const handleSchoolImg = () => {
    switch (user.school.id) {
      case "ERS":
        return ERSLogo;
      case "GIM":
        return GIMLogo;
      case "SSD":
        return SSDLogo;
      case "MIC":
        return MICLogo;
      case "DSD":
        return DSDLogo;
      case "SSGO":
        return SSGOLogo;
      case "VSS":
        return VSSLogo;
      default:
        return ERSLogo;
    }
  };

  useEffect(() => {
    if (user?.school?.id) {
      setSchoolLogo(handleSchoolImg());
    }
  }, [user]);

  return schoolLogo ? (
    <img
      className={className}
      style={style}
      src={schoolLogo}
      alt={user?.school?.id ?? "unknown school"}
    ></img>
  ) : (
    <CircularProgress />
  );
};

export default SchoolImg;
