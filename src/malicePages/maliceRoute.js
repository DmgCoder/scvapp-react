import React from "react";
import { useLocation } from "react-router";
import MaliceLoginPage from "./maliceLoginPage";
import MalicePage from "./malicePage";

export default function MaliceRoute(props) {
  let location = useLocation();

  let pathname = location.pathname;
  if (pathname.endsWith("/")) {
    pathname = pathname.slice(0, pathname.length - 1);
  }

  switch (pathname) {
    case "/malice":
      return <MalicePage />;
    case "/malice/prijava":
      return <MaliceLoginPage />;
    default:
      return <MaliceLoginPage />;
  }
}
