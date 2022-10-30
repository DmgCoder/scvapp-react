import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { selectSideMenuOpen } from "../../features/sideMenu/sideMenuSlice";
import ScheduleItem from "../ScheduleItem/scheduleItem";
import SideMenuCategory from "../SideMenuCategory/sideMenuCategory";
import LoadScheduleData from "./loadScheduleData";

import "./sideMenuSchedule.css";

const SideMenuSchedule = () => {
  const sideMenuOpen = useSelector(selectSideMenuOpen);
  const [trenutnaUra, setTrenutnaUra] = React.useState(null);
  const [naslednjaUra, setNaslednjaUra] = React.useState(null);
  const [zacetekNaslednjeUre, setZacetekNaslednjeUre] = React.useState("0.00");

  const getSchedule = () => {
    async function fetchData() {
      const [t, n] = await LoadScheduleData();
      setTrenutnaUra(t);
      setNaslednjaUra(n);
    }
    fetchData();
  };

  const caculateTimeToNextClass = () => {
    setInterval(() => {
      if (naslednjaUra) {
        const now = new Date();
        const nextClass = new Date(naslednjaUra.zacetekUreM);
        if (nextClass.getTime() < now.getTime()) {
          return;
        }
        const timeToNextClass = nextClass.getTime() - now.getTime();
        setZacetekNaslednjeUre(millisToMinutesAndSeconds(timeToNextClass));
      }
    }, 1000);
  };

  const millisToMinutesAndSeconds = (millis) => {
    if (millis <= 0) return "0.00";
    const minutes = Math.floor(millis / 60000);
    const seconds = ((millis % 60000) / 1000).toFixed(0);
    return minutes + "." + (seconds < 10 ? "0" : "") + seconds;
  };

  useEffect(getSchedule, []);
  useEffect(caculateTimeToNextClass, [naslednjaUra]);

  return (
    <>
      {sideMenuOpen && (
        <div className="side-menu-schedule">
          <SideMenuCategory title={"URNIK"}>
            <ScheduleItem title={"SEDAJ:"} uraTrajanja={trenutnaUra} />
            <ScheduleItem title={"SLEDI:"} uraTrajanja={naslednjaUra} />
            <p className="side-menu-schedule-text">
              Do naslednje ure: <b>{zacetekNaslednjeUre}</b>
            </p>
          </SideMenuCategory>
        </div>
      )}
    </>
  );
};

export default SideMenuSchedule;
