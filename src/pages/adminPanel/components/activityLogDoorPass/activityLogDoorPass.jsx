import { CircularProgress } from "@mui/material";
import React, { useState } from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { selectTheme } from "../../../../features/theme/themeSlice";

import "./activityLogDoorPass.css";
import { GetDoorPassLog, GetDoorPassLogLength } from "./loadLogDoorPass";
import LogItem from "./logItem";

const ActivityLogDoorPass = ({ doorPass }) => {
  const theme = useSelector(selectTheme);
  const [logs, setLogs] = useState(null);
  const [logsOffset, setLogsOffset] = useState(0);
  const [logsLimit, setLogsLimit] = useState(10);
  const [logsLoading, setLogsLoading] = useState(false);
  const [logsLength, setLogsLength] = useState(0);

  const handleLoad = async () => {
    if (doorPass === null) return;
    if (logsLoading) return;
    setLogsLoading(true);
    const [data] = await Promise.all([
      GetDoorPassLog(doorPass.code, logsOffset, logsLimit),
      handleLoadLength(),
    ]);
    if (data.status !== 200) return;
    setLogsOffset(data.data.length + logsOffset);
    handleSetLogs(data.data);
    setLogsLoading(false);
  };

  const handleLoadLength = async () => {
    if (doorPass === null) return;
    const data = await GetDoorPassLogLength(doorPass.code);
    if (data.status !== 200) return;
    setLogsLength(data.data);
  };

  const handleSetLogs = (newLogs) => {
    let dateNow = new Date();
    dateNow.setFullYear(0, 0, 0);
    if (logs !== null) {
      newLogs = [...logs, ...newLogs];
    }
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
        if (newLogs[i - 1]?.isDate === true) continue;
        if (newLogs[i]?.isDate === true) continue;
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
          status={log.status}
        />
      ))}
      {logsLoading && (
        <CircularProgress className="loading-indicator" />
      )}
      {logsLength > logsOffset && (
        <button className="load-more-btn" onClick={handleLoad}>
          NALOŽI VEČ
        </button>
      )}
    </div>
  );
};

export default ActivityLogDoorPass;
