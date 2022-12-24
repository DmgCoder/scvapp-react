import React, { useState } from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { selectTheme } from "../../../../features/theme/themeSlice";

import "./activityLogDoorPass.css";
import { GetDoorPassLog } from "./loadLogDoorPass";
import LogItem from "./logItem";

const ActivityLogDoorPass = ({ doorPass }) => {
  const theme = useSelector(selectTheme);
  const [logs, setLogs] = useState(null);

  const handleLoad = async () => {
    if (doorPass === null) return;
    const data = await GetDoorPassLog(doorPass.code);
    if (data.status !== 200) return;
    handleSetLogs(data.data);
  };

  const handleSetLogs = (newLogs) => {
    let dateNow = new Date();
    dateNow.setFullYear(0, 0, 0);
    let logsToAppend = [];
    for (let i = 0; i < newLogs.length; i++) {
      let dateLog = new Date(newLogs[i].created_at);
      if (
        dateNow.getDate() !== dateLog.getDate() ||
        dateNow.getMonth() !== dateLog.getMonth() ||
        dateNow.getFullYear() !== dateLog.getFullYear()
      ) {
        dateNow = dateLog;
        let displayDate = new Date(dateLog);
        displayDate.setHours(0, 0, 0, 0);
        if (i > 0) {
          if (newLogs[i - 1].isDate) continue;
        }
        logsToAppend.push({
          created_at: displayDate,
          index: i,
        });
      }
    }

    for (let i = 0; i < logsToAppend.length; i++) {
      newLogs.splice(logsToAppend[i].index + i, 0, {
        created_at: logsToAppend[i].created_at,
        isDate: true,
      });
    }

    setLogs(newLogs);
  };

  useEffect(() => {
    handleLoad();
  }, [doorPass]);

  return (
    <div className={`admin-activity-log-door-pass ${theme}`}>
      {logs?.map((log, i) => (
        <LogItem
          key={i}
          date={log.created_at}
          doorName={doorPass.name_id}
          userID={log.user_pass?.azure_id}
          isDate={log.isDate}
        />
      ))}
    </div>
  );
};

export default ActivityLogDoorPass;
