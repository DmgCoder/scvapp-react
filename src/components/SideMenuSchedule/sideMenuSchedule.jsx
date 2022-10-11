import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { selectSideMenuOpen } from "../../features/sideMenu/sideMenuSlice";
import ScheduleItem from "../ScheduleItem/scheduleItem";
import SideMenuCategory from "../SideMenuCategory/sideMenuCategory";
import LoadScheduleData from "./loadScheduleData";

import "./sideMenuSchedule.css";

const SideMenuSchedule = () => {
  const sideMenuOpen = useSelector(selectSideMenuOpen);

  const getSchedule = () => {
    LoadScheduleData();
  };

  useEffect(getSchedule, []);

  return (
    <>
      {sideMenuOpen && (
        <div className="side-menu-schedule">
          <SideMenuCategory title={"URNIK"}>
            <ScheduleItem
              title={"SEDAJ:"}
              className={"O-SSTJ"}
              classRoom={"C502"}
              classType={"nadomescanje"}
            />
            <ScheduleItem
              title={"SLEDI:"}
              className={"O-SSTJ"}
              classRoom={"C502"}
            />
            <p className="side-menu-schedule-text">
              Do naslednje ure: <b>01:15</b>
            </p>
          </SideMenuCategory>
        </div>
      )}
    </>
  );
};

export default SideMenuSchedule;
