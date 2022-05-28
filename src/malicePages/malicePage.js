import React, { useEffect, useRef, useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { ReactSession } from "react-client-session";

import "./malicePage.css";
import windowSize from "../classes/getWindowDimensions.js";
import MalicaJed from "../components/maliceData";

import mesniMeniPicture from "../pictures/slike_malica/mesni_meni.png";
import vegiMeniPicture from "../pictures/slike_malica/vegi_meni.png";
import hamburgerPicture from "../pictures/slike_malica/hamburger.png";
import kmeckiSendvicPicture from "../pictures/slike_malica/kmecki_sendvic.png";
import tunaSendvicPicture from "../pictures/slike_malica/sendvic_s_tuno.png";
import sirovSendvicPicture from "../pictures/slike_malica/sendvic_s_sirom.png";
import pizzaPicture from "../pictures/slike_malica/pizza.png";
import pizzaMargeritePicture from "../pictures/slike_malica/pizza_margerite.png";
import solataPicture from "../pictures/slike_malica/solata.png";
import brezMalicePicture from "../pictures/slike_malica/brez_malice.png";
import profilePicture from "../pictures/slike_malica/profilePicture.png";

let jediZaDanes = [];

jediZaDanes.push(
  new MalicaJed(
    "Mesni meni",
    "Perutniče v medeni omaki",
    mesniMeniPicture,
    true
  )
);
jediZaDanes.push(new MalicaJed("Vegi meni", "Sirnica", vegiMeniPicture));
jediZaDanes.push(new MalicaJed("Pizza", "Klasična pizza", pizzaPicture));
jediZaDanes.push(
  new MalicaJed("Pizza margerite", "Pizza margerite", pizzaMargeritePicture)
);
jediZaDanes.push(new MalicaJed("Hamburger", "Hamburger", hamburgerPicture));
jediZaDanes.push(new MalicaJed("Solata", "Solata", solataPicture));
jediZaDanes.push(
  new MalicaJed("Sendvič s tuno", "Sendvič s tuno", tunaSendvicPicture)
);
jediZaDanes.push(
  new MalicaJed("Kmečki sendvič", "Kmečki sendvič", kmeckiSendvicPicture)
);
jediZaDanes.push(
  new MalicaJed("Sendvič s sirom", "Sendvič s sirom", sirovSendvicPicture)
);
jediZaDanes.push(
  new MalicaJed("Brez malice", "Brez malice", brezMalicePicture)
);

export default function MalicePage(props) {
  let ref = useRef();
  const [sizeOfParentDatePicker, setSizeOfParentDatePicker] = useState(0);
  const [izbraniTeden, setIzbraniTeden] = useState(0);
  const [menuIsPrisented, setMenuIsPresented] = useState(false);
  const [userMalice, setUserMalice] = useState({});
  let winSize = windowSize();

  let navigation = useNavigate();
  useEffect(() => {
    getUserMalice();
    setSizeOfParentDatePicker(ref.current.offsetWidth);
  }, []);
  useEffect(() => {
    setSizeOfParentDatePicker(ref.current.offsetWidth);
  }, [winSize.width]);

  function addToIzbraniTeden() {
    setIzbraniTeden(izbraniTeden + 1);
  }
  function removeToIzbraniTeden() {
    if (izbraniTeden - 1 >= 0) {
      setIzbraniTeden(izbraniTeden - 1);
    }
  }

  function openCloseMenu() {
    setMenuIsPresented(!menuIsPrisented);
  }

  function getUserMalice() {
    let user_malice = ReactSession.get("user_malice");
    if (user_malice && user_malice.access_token) {
      setUserMalice(user_malice);
    } else {
      navigation("/malice/prijava");
    }
  }

  const nav = useNavigate();
  function changeDate(e) {
    let target = e.target;
    let i = 0;
    while ((target.id === "" || !target.id) && i < 3) {
      target = target.parentNode;
      i++;
    }
    let date = new Date(target.id);
    let dateString = `${date.getFullYear()}-${
      date.getMonth() + 1
    }-${date.getDate()}`;
    nav({
      search: `?date=${dateString}`,
    });
  }

  return (
    <>
      <div className="mainMalice">
        <div className="mainMaliceContent">
          <div className="maliceMenu">
            <div className="maliceMenu-Info">
              <div className="maliceMenu-Info-Text">
                <p>PIN koda za današnjo malico:</p>
                <b>{userMalice.student && userMalice.student.pin_number}</b>
              </div>
              <div className="maliceMenu-Info-Text">
                <p>Stanje na vašem računu:</p>
                <b>{userMalice.student && userMalice.student.budget}€</b>
              </div>
            </div>
            {/* <MaliceAlert /> */}
            <div className="maliceMenu-Profile">
              <img src={profilePicture} alt=""></img>
              <b>
                {userMalice.student && userMalice.student.first_name}{" "}
                {userMalice.student && userMalice.student.last_name}
              </b>
              <button
                className="maliceMenu-Profile-Btn"
                style={menuIsPrisented ? { transform: "rotate(180deg)" } : {}}
                onClick={openCloseMenu}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="23"
                  height="23"
                  fill="currentColor"
                  className="bi bi-chevron-down"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
                  />
                </svg>
              </button>
              <div
                className="maliceMenu-Profile-Menu"
                style={
                  menuIsPrisented ? {} : { visibility: "hidden", opacity: "0" }
                }
              >
                <div className="maliceMenu-Profile-Menu-Triangel"></div>
                <ul className="maliceMenu-Profile-Menu-List">
                  <MenuLiElement title="Profil">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      className="bi bi-person-fill"
                      viewBox="0 0 16 16"
                    >
                      <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                    </svg>
                  </MenuLiElement>
                  <MenuLiElement title="Nastavitve">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      className="bi bi-sliders"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fillRule="evenodd"
                        d="M11.5 2a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zM9.05 3a2.5 2.5 0 0 1 4.9 0H16v1h-2.05a2.5 2.5 0 0 1-4.9 0H0V3h9.05zM4.5 7a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zM2.05 8a2.5 2.5 0 0 1 4.9 0H16v1H6.95a2.5 2.5 0 0 1-4.9 0H0V8h2.05zm9.45 4a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zm-2.45 1a2.5 2.5 0 0 1 4.9 0H16v1h-2.05a2.5 2.5 0 0 1-4.9 0H0v-1h9.05z"
                      />
                    </svg>
                  </MenuLiElement>
                  <MenuLiElement title="Navodila">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      className="bi bi-info-lg"
                      viewBox="0 0 16 16"
                    >
                      <path d="m9.708 6.075-3.024.379-.108.502.595.108c.387.093.464.232.38.619l-.975 4.577c-.255 1.183.14 1.74 1.067 1.74.72 0 1.554-.332 1.933-.789l.116-.549c-.263.232-.65.325-.905.325-.363 0-.494-.255-.402-.704l1.323-6.208Zm.091-2.755a1.32 1.32 0 1 1-2.64 0 1.32 1.32 0 0 1 2.64 0Z" />
                    </svg>
                  </MenuLiElement>
                  <div className="maliceMenu-Profile-Menu-List-Line"></div>
                  <MenuLiElement title="Odjava" href="/malice/prijava">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      enableBackground="new 0 0 24 24"
                      viewBox="0 0 24 24"
                      fill="#000000"
                    >
                      <g>
                        <path d="M0,0h24v24H0V0z" fill="none" />
                      </g>
                      <g>
                        <path d="M17,8l-1.41,1.41L17.17,11H9v2h8.17l-1.58,1.58L17,16l4-4L17,8z M5,5h7V3H5C3.9,3,3,3.9,3,5v14c0,1.1,0.9,2,2,2h7v-2H5V5z" />
                      </g>
                    </svg>
                  </MenuLiElement>
                </ul>
              </div>
            </div>
          </div>
          <div className="maliceContent">
            {/* <Alert severity="success">Prijava uspešna!</Alert> */}
            <div className="maliceContent-DateSelect" ref={ref}>
              <button onClick={removeToIzbraniTeden}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="35"
                  fill="currentColor"
                  className="bi bi-chevron-left"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"
                  />
                </svg>
              </button>
              <MaliceSelectingDateBoxes
                widthOfParent={sizeOfParentDatePicker}
                izbraniTeden={izbraniTeden}
                changeDate={changeDate}
              />
              <button onClick={addToIzbraniTeden}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="35"
                  fill="currentColor"
                  className="bi bi-chevron-right"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
                  />
                </svg>
              </button>
            </div>
            <div className="maliceContent-selectMeal">
              <MaliceContentMeals />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

function MaliceAlert() {
  return (
    <div className="maliceMenu-Alert">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="23"
        height="23"
        fill="currentColor"
        className="bi bi-info-circle-fill"
        viewBox="0 0 16 16"
      >
        <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm.93-9.412-1 4.705c-.07.34.029.533.304.533.194 0 .487-.07.686-.246l-.088.416c-.287.346-.92.598-1.465.598-.703 0-1.002-.422-.808-1.319l.738-3.468c.064-.293.006-.399-.287-.47l-.451-.081.082-.381 2.29-.287zM8 5.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2z" />
      </svg>
      <p>NIZKO STANJE NA RAČUNU!</p>
    </div>
  );
}

function MaliceSelectingDateBoxes(props) {
  let boxes = [];
  let location = useLocation();
  const [hightOfBox, setHightOfBox] = useState(
    getSize(props.widthOfParent * 0.08)
  );
  const [numberOfBoxes, setNumberOfBoxes] = useState(1);

  let dneviVTednu = [
    "NEDELJA",
    "PONEDELJEK",
    "TOREK",
    "SREDA",
    "ČETRTEK",
    "PETEK",
    "SOBOTA",
  ];

  let dateNow = new Date();

  useEffect(() => {
    // setHightOfBox(getSize(props.widthOfParent * 0.08));
    let numItems = parseInt((props.widthOfParent - 120) / (hightOfBox + 20));
    if (numItems >= 1) {
      setNumberOfBoxes(numItems);
    } else {
      setNumberOfBoxes(1);
    }
  }, [hightOfBox]);
  useEffect(() => {
    setHightOfBox(getSize(props.widthOfParent * 0.08));
    let numItems = parseInt((props.widthOfParent - 140) / (hightOfBox + 20));
    if (numItems >= 1) {
      setNumberOfBoxes(numItems);
    } else {
      setNumberOfBoxes(1);
    }
  }, [props.widthOfParent]);

  let selectedDate = new Date(dateNow.getTime());

  let search = location.search.slice(1).split("&");
  search.forEach((s) => {
    let a = s.split("=");
    let key = a[0] || "";
    let value = a[1] || "";

    if (key === "date") {
      let dateSplit = value.split("-");
      if (dateSplit.length === 3) {
        let sDate = new Date(dateNow.getTime());
        sDate.setDate(dateSplit[2]);
        sDate.setMonth(dateSplit[1] - 1);
        sDate.setFullYear(dateSplit[0]);
        if (sDate.getTime() >= dateNow.getTime()) {
          selectedDate = sDate;
        }
      }
    }
  });

  let danMillis = 86400000;

  for (
    let i = numberOfBoxes * props.izbraniTeden;
    i < numberOfBoxes + numberOfBoxes * props.izbraniTeden;
    i++
  ) {
    let dan = new Date(dateNow.getTime() + danMillis * i);
    let selectedBox =
      dan.getDate() === selectedDate.getDate() &&
      dan.getMonth() === selectedDate.getMonth() &&
      dan.getFullYear() === selectedDate.getFullYear();
    boxes.push(
      <MaliceSelectingDateBox
        title={getDateTitle(dateNow, dan)}
        selected={selectedBox}
        day={dneviVTednu[dan.getDay()] ?? ""}
        date={getStringDate(dan)}
        hightOfBox={hightOfBox}
        key={i}
        clickHandle={props.changeDate}
        id={dan}
      />
    );
  }
  return boxes;
}

function MaliceSelectingDateBox(props) {
  return (
    <div
      className="maliceContent-DateSelect-Box"
      style={{
        height: props.hightOfBox,
        width: props.hightOfBox,
        cursor: props.selected ? "" : "pointer",
      }}
      onClick={props.clickHandle}
      id={props.id}
    >
      <div
        className="maliceContent-DateSelect-Box-Content"
        style={{ backgroundColor: props.selected ? "#4AE262" : "" }}
      >
        <p style={{ color: props.title === "" ? "transparent" : "" }}>
          {props.title === "" ? "a" : props.title}
        </p>
        <b>{props.day}</b>
        <p>{props.date}</p>
      </div>
    </div>
  );
}

function MaliceContentMeals() {
  let meals = [];
  for (let i = 0; i < jediZaDanes.length; i++) {
    let jed = jediZaDanes[i];
    meals.push(
      <MaliceContentMeal
        ime={jed.ime}
        opis={jed.opis}
        img={jed.slika}
        izbran={jed.izbran}
        key={i}
      />
    );
  }
  return meals;
}

function MaliceContentMeal(props) {
  return (
    <div
      className="maliceContent-selectMeal-Meal"
      style={
        props.izbran ? { border: "2px solid #03c316", color: "#03C316" } : {}
      }
    >
      <div className="maliceContent-selectMeal-Meal-Content">
        <div className="maliceContent-selectMeal-Meal-Right">
          <b>{props.ime}</b>
          <p>{props.opis}</p>
        </div>
        <div className="maliceContent-selectMeal-Meal-Left">
          {!props.izbran ? (
            <button>Izberi meni</button>
          ) : (
            <button style={{ backgroundColor: "#03C316", cursor: "auto" }}>
              Izbran
            </button>
          )}
          <img src={props.img} alt=""></img>
        </div>
      </div>
    </div>
  );
}

function MenuLiElement(props) {
  return (
    <Link to={props.href || ""} className="maliceMenu-Profile-Menu-List-Item">
      <div className="maliceMenu-Profile-Menu-List-Item-Icon">
        {props.children}
      </div>
      <p>{props.title}</p>
    </Link>
  );
}

function getStringDate(date) {
  let dateDate = date.getDate() < 10 ? `0${date.getDate()}` : date.getDate();
  let dateMonth =
    date.getMonth() + 1 < 10 ? `0${date.getMonth() + 1}` : date.getMonth() + 1;
  let dateYear = date.getFullYear();
  return `${dateDate}.${dateMonth}.${dateYear}`;
}

function getSize(size) {
  if (size < 117) {
    return 117;
  } else if (size > 145) {
    return 145;
  }
  return size;
}

function getDateTitle(dateNow, dan) {
  let danMillis = 86400000;
  if (dateNow.getTime() === dan.getTime()) {
    return "DANES";
  } else if (dateNow.getTime() === dan.getTime() - danMillis) {
    return "JUTRI";
  }
  return "";
}
