import React, { useEffect, useState } from "react";
import { useDoorPasses } from "../../../../features/doorPasses/useDoorPasses";

const LogItem = ({ date, doorName, userID }) => {
  const { getUserFromID } = useDoorPasses();
  const [displayName, setDisplayName] = useState("");
  const [displayDate, setDisplayDate] = useState("");

  const handleLoad = async () => {
    const user = await getUserFromID(userID);
    if (user) {
      setDisplayName(user.displayName);
    }
  };
  useEffect(() => {
    handleLoad();
  }, [userID, getUserFromID]);

  useEffect(() => {
    if (date) {
      const newDate = new Date(date);
      const day = newDate.getDate();
      const month = newDate.getMonth() + 1;
      const year = newDate.getFullYear();
      const hours = newDate.getHours();
      const minutes = newDate.getMinutes();
      const seconds = newDate.getSeconds();
      setDisplayDate(`${day}/${month}/${year} ${hours}:${minutes}:${seconds}`);
    }
  }, [date]);

  return (
    <p>
      {displayDate}: {doorName}, {displayName}
    </p>
  );
};

export default LogItem;
