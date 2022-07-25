import { CircularProgress } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import ShowAlert from "../components/showAlert";
import SideBar from "../components/sidebar";
import MainPage from "../mainPage/mainPage";

import "./homePage.css";

const HomePage = () => {
  const [userData, setUserData] = useState({ a: "" });
  const [isLoaded, setLoaded] = useState(false);

  const [alertIn, setAlertIn] = useState(false);

  let location = useLocation();
  let navigation = useNavigate();

  async function getUserData() {
    //Funkcija, ki pridobi uporabnikove podatke, ki so potrebni
    try {
      let data = {};
      const [userDataFetch, userStatusFetch, userSchoolFetch, isUserAdmin] =
        await Promise.all([
          fetch(`${process.env.REACT_APP_BACKEND_URL}/user/get/`, {
            mode: "cors", //Prijemne podatke lahk uporabi tudi iz tujih domen
            credentials: "include", //Seja uporabnika je vključena
            method: "GET", //Uporabljena je metoda GET
          }),
          fetch(`${process.env.REACT_APP_BACKEND_URL}/user/get/status`, {
            mode: "cors",
            credentials: "include",
            method: "GET",
          }),
          fetch(`${process.env.REACT_APP_BACKEND_URL}/user/school`, {
            mode: "cors",
            credentials: "include",
            method: "GET",
          }),
          chechIfUserAdmin(),
        ]).catch((e) => {
          setLoaded(true);
          window.location.pathname = "/prijava";
        });

      if (userDataFetch.ok) {
        if (userStatusFetch.ok && userSchoolFetch.ok) {
          const [userDataJson, userStatusJson, userSchoolJson] =
            await Promise.all([
              userDataFetch.json(),
              userStatusFetch.json(),
              userSchoolFetch.json(),
            ]);
          data = userDataJson;
          data.status = userStatusJson;
          data.school = userSchoolJson;
          data.isAdmin = isUserAdmin;
          setUserData(data);
        } else if (userStatusFetch.ok) {
          const [userDataJson, userStatusJson] = await Promise.all([
            userDataFetch.json(),
            userStatusFetch.json(),
          ]);
          data = userDataJson;
          data.isAdmin = isUserAdmin;
          data.status = userStatusJson;
          data.school = {
            id: "",
            urnikUrl: "",
            color: "",
            schoolUrl: "",
            name: "",
            razred: "",
          };
          setUserData(data);
        } else if (userSchoolFetch.ok) {
          const [userDataJson, userSchoolJson] = await Promise.all([
            userDataFetch.json(),
            userSchoolFetch.json(),
          ]);
          data = userDataJson;
          data.isAdmin = isUserAdmin;
          data.status = {
            display: "Unknown",
            color: "#ffffff",
            id: "Unknown",
          };
          data.school = userSchoolJson;
          setUserData(data);
        } else {
          const userDataJson = await userDataFetch.json();
          data = userDataJson;
          data.isAdmin = isUserAdmin;
          data.status = {
            display: "Unknown",
            color: "#ffffff",
            id: "Unknown",
          };
          data.school = {
            id: "",
            urnikUrl: "",
            color: "",
            schoolUrl: "",
            name: "",
            razred: "",
          };
          setUserData(data);
        }

        setLoaded(true);
      } else {
        setLoaded(true);
        window.location.pathname = "/prijava";
      }
    } catch (e) {
      setLoaded(true);
      window.location.pathname = "/prijava";
    }
  }

  const [eAUrlLink, seteAUrlLink] = useState("https://www.easistent.com/");
  const [maliceUrlLink, setMaliceUrlLink] = useState(
    "https://malice.scv.si/students/sign_in"
  );

  async function logOutUser(e) {
    e.preventDefault();
    seteAUrlLink("https://www.easistent.com/p/get_odjava");
    await fetch("https://malice.scv.si/students/sign_out", {
      mode: "cors",
      credentials: "include",
      method: "DELETE",
    }).catch((e) => console.log(e));
    setTimeout(() => {
      window.location.replace(
        `${process.env.REACT_APP_BACKEND_URL}/user/logoutUrl/`
      );
    }, 500);
    // console.log("Odjava")
  }

  async function chechIfUserAdmin() {
    try {
      let res = await fetch(`${process.env.REACT_APP_BACKEND_URL}/admin`, {
        mode: "cors", //Prijemne podatke lahk uporabi tudi iz tujih domen
        credentials: "include", //Seja uporabnika je vključena
        method: "GET", //Uporabljena je metoda GET
      }).catch((e) => console.log(e));
      if (res.status === 200) {
        const isAdminJson = await res.json();
        return isAdminJson.admin;
      }
      return false;
    } catch (e) {
      return false;
    }
  }

  useEffect(() => {
    getUserData();
  }, []);

  useEffect(() => {
    let search = location.search.slice(1).split("&");
    search.forEach((s) => {
      let a = s.split("=");
      let key = a[0] || "";
      let value = a[1] || "";

      if (key === "success" && value === "signin") {
        localStorage.setItem("login", "success");
        localStorage.setItem("login-time", new Date().getTime());
        navigation({
          search: "",
        });
      }
    });
  });

  function closeAlert() {
    setAlertIn(false);
    localStorage.removeItem("login");
    localStorage.removeItem("login-time");
  }

  useEffect(() => {
    if (userData.displayName && isLoaded) {
      let item = localStorage.getItem("login") || "";
      let itemTime = localStorage.getItem("login-time") || 0;
      if (item === "success" && !alertIn) {
        setAlertIn(true);
        let int = setInterval(() => {
          let n = new Date().getTime();
          if (parseInt(itemTime) + 7000 <= n) {
            clearInterval(int);
            closeAlert();
          }
        }, 1000);
      }
    }
  }, [isLoaded]);

  if (!userData.displayName && isLoaded) {
    return <></>;
  } else if (!isLoaded) {
    return (
      <>
        <CircularProgress
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%,-50%)",
          }}
        />
      </>
    );
  }
  return (
    <main className="main">
      <SideBar
        userData={userData}
        style={{ height: "100%" }}
        logOutUser={logOutUser}
      />
      <MainPage
        eAUrlLink={eAUrlLink}
        maliceUrlLink={maliceUrlLink}
        userData={userData}
        style={{ width: "100%", height: "100%" }}
      />
      <ShowAlert
        show={alertIn}
        title="Prijava uspešna!"
        text="Prijavljeni ste v portal ŠCVApp."
        closeAlert={closeAlert}
      />
    </main>
  );
};

export default HomePage;
