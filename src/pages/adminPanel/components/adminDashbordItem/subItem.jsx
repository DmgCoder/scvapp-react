import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

const SubItem = ({ link, title }) => {
  const location = useLocation();
  const [active, setActive] = useState(false);

  useEffect(() => {
    if (location.pathname.startsWith(`/admin/${link}`)) {
      setActive(true);
    } else {
      setActive(false);
    }
  }, [location]);

  return (
    <Link
      to={link ? `/admin/${link}` : "/admin"}
      className={`admin-dashboard-item-sub ${active ? "active" : ""}`}
    >
      <li>{title}</li>
    </Link>
  );
};

export default SubItem;
