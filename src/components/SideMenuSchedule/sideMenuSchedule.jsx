import React from "react";
import { useSelector } from "react-redux";
import { selectSideMenuOpen } from "../../features/sideMenu/sideMenuSlice";
import ScheduleItem from "../ScheduleItem/scheduleItem";
import SideMenuCategory from "../SideMenuCategory/sideMenuCategory";

import "./sideMenuSchedule.css";

const SideMenuSchedule = () => {
  const sideMenuOpen = useSelector(selectSideMenuOpen);
  return (
    <>
      {sideMenuOpen && (
        <div className="side-menu-schedule">
          <SideMenuCategory title={"URNIK"}>
            <ScheduleItem
              title={"SEDAJ:"}
              className={"PPB"}
              classRoom={"C502"}
              event={"Sprejem dijakov 1. letnikov"}
              classType={"dogodek"}
            />
          </SideMenuCategory>
        </div>
      )}
    </>
  );
};

export default SideMenuSchedule;
