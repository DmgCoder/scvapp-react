import React, { lazy, Suspense, useEffect, useState } from "react";
import { Routes, useLocation, Route, Navigate } from "react-router-dom";
const MainTickets = lazy(() => import("./Ticket/MainTickets.jsx"));
const AdminChangeSchedule = lazy(() => import("./changeSchedule.jsx"));
const AdminHome = lazy(() => import("./home.jsx"));

export default function AdminRoute() {
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
  return (
    <>
      <Suspense fallback={<div></div>}>
        <Routes>
          <Route path="/" element={<AdminHome />} />
          <Route path="/ureditevUrnikov" element={<AdminChangeSchedule />} />
          <Route path="/ticket" element={<MainTickets />} />
          <Route path="/ticket/home" element={<MainTickets />} />
          <Route path="/ticket/my" element={<MainTickets />} />
          <Route path="/ticket/open" element={<MainTickets />} />
          <Route path="/ticket/closed" element={<MainTickets />} />
          <Route path="/ticket/all" element={<MainTickets />} />
          <Route path="*" element={<Navigate to={"/not-found"} />} />
        </Routes>
      </Suspense>
    </>
  );
  // switch (pathname) {
  //   case "":
  //     return <AdminHome />;
  //   case "/ureditevUrnikov":
  //     return <AdminChangeSchedule />;
  //   case "/ticket":
  //     return <MainTickets />;
  //   case "/ticket/home":
  //     return <MainTickets />;
  //   case "/ticket/my":
  //     return <MainTickets />;
  //   case "/ticket/open":
  //     return <MainTickets />;
  //   case "/ticket/closed":
  //     return <MainTickets />;
  //   case "/ticket/all":
  //     return <MainTickets />;
  //   default:
  //     return <AdminHome />;
  // }
}
