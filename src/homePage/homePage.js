import React, { useEffect, useState, useLayoutEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import ShowAlert from "../components/showAlert";
import SideBar from "../components/sidebar";
import MainPage from "../mainPage/mainPage";

const HomePage = () => {
  const [userData, setUserData] = useState({ a: "" });
  const [isLoaded, setLoaded] = useState(false);

  const [alertIn, setAlertIn] = useState(false);

  let location = useLocation();
  let navigation = useNavigate();

  async function getUserData() {
    //Funkcija, ki pridobi uporabnikove podatke, ki so potrebni
    let json = await fetch(`${process.env.REACT_APP_BACKEND_URL}/user/get/`, {
      //URL na katerem se nahajajo osnovni podatki o uporabniku
      mode: "cors", //Prijemne podatke lahk uporabi tudi iz tujih domen
      credentials: "include", //Seja uporabnika je vključena
      method: "GET", //Uporabljena je metoda GET
    }).catch((e) => {
      //Če spodleti uporabnika vrne na prijavno stran
      setLoaded(true);
      window.location.pathname = "/prijava";
    });
    let data = {};
    if (json.ok) {
      //Preverimo ali je zahteva uredu
      data = await json.json(); //Zahteva je uredo in pretvorimo tip besede v tip predmeta in shranimo v spremenjlivko
    } else {
      return (window.location.pathname = "/prijava"); //Uporabnika vrnemo na prijavno stran
    }
    json = await fetch(`${process.env.REACT_APP_BACKEND_URL}/user/get/status`, {
      mode: "cors",
      credentials: "include",
      method: "GET",
    });
    if (json.ok) {
      data.status = await json.json();
    } else {
      data.status = {
        display: "Unknown",
        color: "#ffffff",
        id: "Unknown",
      };
    }
    json = await fetch(`${process.env.REACT_APP_BACKEND_URL}/user/school`, {
      mode: "cors",
      credentials: "include",
      method: "GET",
    });
    if (json.ok) {
      data.school = await json.json();
    } else {
      data.school = {
        id: "",
        urnikUrl: "",
        color: "",
        schoolUrl: "",
        name: "",
        razred: "",
      };
    }
    data.refreshUserStatus = getUserData;
    setUserData(data);
    setLoaded(true);
  }

  const [eAUrlLink, seteAUrlLink] = useState("https://www.easistent.com/");
  const [maliceUrlLink, setMaliceUrlLink] = useState(
    "https://malice.scv.si/students/sign_in"
  );

  async function logOutUser(e) {
    e.preventDefault();
    seteAUrlLink("https://www.easistent.com/p/get_odjava");
    await fetch("https://malice.scv.si/students/sign_out",{
      mode: "cors",
      credentials: "include",
      method:"DELETE"
    }).catch(e=>console.log(e))
    setTimeout(() => {
      window.location.replace(
        `${process.env.REACT_APP_BACKEND_URL}/user/logoutUrl/`
      );
    }, 500);
    // console.log("Odjava")
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
  
  function closeAlert(){
    setAlertIn(false)
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
  },[isLoaded]);

  if (!userData.displayName && isLoaded) {
    return (
      <>
        <p>Auth Error</p>
      </>
    );
  } else if (!isLoaded) {
    return <></>;
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
        text="Uspešno ste se prijavili v ŠCVApp"
        closeAlert={closeAlert}
      />
    </main>
  );
};

export default HomePage;
