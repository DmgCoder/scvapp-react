import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { AdminChangeSchedule } from "./changeSchedule.jsx";
import { AdminHome } from "./home.jsx";

export function AdminRoute() {
  let location = useLocation(); //Dobimo URL
  const [loaded, setLoaded] = useState(false);
  const [admin, setAdmin] = useState(false);

  async function loadIfUserAdmin() {
    let data = await fetch(`${process.env.REACT_APP_BACKEND_URL}/admin`, {
      mode: "cors", //Prijemne podatke lahk uporabi tudi iz tujih domen
      credentials: "include", //Seja uporabnika je vključena
      method: "GET", //Uporabljena je metoda GET
    }).catch((e) => {
      setLoaded(true);
      window.location.pathname = "/";
    });
    if (data.status !== 200) {
      setLoaded(true);
      window.location.pathname = "/";
      return;
    }
    let json = await data.json();
    if (json.admin === true) {
      setAdmin(true);
    } else {
      setLoaded(true);
      window.location.pathname = "/";
      return;
    }
    setLoaded(true);
  }

  useEffect(() => {
    loadIfUserAdmin();
  }, []);

  if (!loaded) {
    return <></>;
  } else if (!admin) {
    return <>Auth Error</>;
  }

  let pathname = location.pathname; //Dobimo pot po imenu domene in porta npr. .../domov
  if (pathname.endsWith("/")) {
    pathname = pathname.slice(0, pathname.length - 1);
  }
  pathname = pathname.replace("/admin", "");
  //Preverimo ali se ime poti ujema z besedo in temu ustrezno prikazemo komponento
  switch (pathname) {
    case "":
      return <AdminHome />;
    case "/ureditevUrnikov":
      return <AdminChangeSchedule />;
    default:
      return <AdminHome />;
  }
}
