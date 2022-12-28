import React, { useEffect, useState } from "react";
import { useDoorPasses } from "../../../../features/doorPasses/useDoorPasses";

const LogItem = ({ date, doorName, userID, isDate, status }) => {
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
      const day = newDate.getDate().zeroPad(2);
      const month = (newDate.getMonth() + 1).zeroPad(2);
      const year = newDate.getFullYear();
      const hours = newDate.getHours().zeroPad(2);
      const minutes = newDate.getMinutes().zeroPad(2);
      const seconds = newDate.getSeconds().zeroPad(2);
      if (isDate === true) setDisplayDate(`${day}.${month}.${year}`);
      else setDisplayDate(`${hours}:${minutes}:${seconds}`);
    }
  }, [date]);

  return (
    <>
      {isDate ? (
        <p className="date">{displayDate}</p>
      ) : (
        <p className={status !== "success" && !isDate ? "fail" : ""}>
          {displayDate} -{" "}
          <a
            href={`https://portal.azure.com/#view/Microsoft_AAD_UsersAndTenants/UserProfileMenuBlade/~/overview/userId/${userID}`}
            target="_blank"
            rel="noreferrer"
          >
            {displayName}
          </a>{" "}
          - {doorName}
        </p>
      )}
    </>
  );
};

export default LogItem;

Number.prototype.zeroPad = function () {
  return ("0" + this).slice(-2);
};
