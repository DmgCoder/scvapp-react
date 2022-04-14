import React, { useEffect, useRef, useState } from "react";

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
import { Link } from "react-router-dom";

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
  let winSize = windowSize();

  useEffect(() => {
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

  return (
    <>
      <div className="mainMalice">
        <div className="mainMaliceContent">
          <div className="maliceMenu">
            <div className="maliceMenu-Info">
              <div className="maliceMenu-Info-Text">
                <p>PIN koda za današnjo malico:</p>
                <b>3141</b>
              </div>
              <div className="maliceMenu-Info-Text">
                <p>Stanje na vašem računu:</p>
                <b>3141,59€</b>
              </div>
            </div>
            {/* <MaliceAlert /> */}
            <div className="maliceMenu-Profile">
              <img
                src="https://www.pngitem.com/pimgs/b/150-1503945_user-png.png"
                alt=""
              ></img>
              <b>Urban Krepel</b>
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
                      width="23"
                      height="23"
                      fill="currentColor"
                      className="bi bi-person-circle"
                      viewBox="0 0 16 16"
                    >
                      <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                      <path
                        fillRule="evenodd"
                        d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"
                      />
                    </svg>
                  </MenuLiElement>
                  <MenuLiElement title="Nastavitve">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="23"
                      height="23"
                      fill="currentColor"
                      className="bi bi-gear-fill"
                      viewBox="0 0 16 16"
                    >
                      <path d="M9.405 1.05c-.413-1.4-2.397-1.4-2.81 0l-.1.34a1.464 1.464 0 0 1-2.105.872l-.31-.17c-1.283-.698-2.686.705-1.987 1.987l.169.311c.446.82.023 1.841-.872 2.105l-.34.1c-1.4.413-1.4 2.397 0 2.81l.34.1a1.464 1.464 0 0 1 .872 2.105l-.17.31c-.698 1.283.705 2.686 1.987 1.987l.311-.169a1.464 1.464 0 0 1 2.105.872l.1.34c.413 1.4 2.397 1.4 2.81 0l.1-.34a1.464 1.464 0 0 1 2.105-.872l.31.17c1.283.698 2.686-.705 1.987-1.987l-.169-.311a1.464 1.464 0 0 1 .872-2.105l.34-.1c1.4-.413 1.4-2.397 0-2.81l-.34-.1a1.464 1.464 0 0 1-.872-2.105l.17-.31c.698-1.283-.705-2.686-1.987-1.987l-.311.169a1.464 1.464 0 0 1-2.105-.872l-.1-.34zM8 10.93a2.929 2.929 0 1 1 0-5.86 2.929 2.929 0 0 1 0 5.858z" />
                    </svg>
                  </MenuLiElement>
                  <MenuLiElement title="Odjava" href="/malice/prijava">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="23"
                      height="23"
                      fill="currentColor"
                      className="bi bi-box-arrow-right"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 12.5a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v2a.5.5 0 0 0 1 0v-2A1.5 1.5 0 0 0 9.5 2h-8A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-2a.5.5 0 0 0-1 0v2z"
                      />
                      <path
                        fillRule="evenodd"
                        d="M15.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L14.293 7.5H5.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3z"
                      />
                    </svg>
                  </MenuLiElement>
                </ul>
              </div>
            </div>
          </div>
          <div className="maliceContent">
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

  for (
    let i = numberOfBoxes * props.izbraniTeden;
    i < numberOfBoxes + numberOfBoxes * props.izbraniTeden;
    i++
  ) {
    let danMillis = 86400000;
    let dan = new Date(dateNow.getTime() + danMillis * i);
    boxes.push(
      <MaliceSelectingDateBox
        title={getDateTitle(dateNow, dan)}
        selected={i === 0 ? true : false}
        day={dneviVTednu[dan.getDay()] ?? ""}
        date={getStringDate(dan)}
        hightOfBox={hightOfBox}
        key={i}
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
      // key={props.key}
    >
      <div
        className="maliceContent-DateSelect-Box-Content"
        style={{ backgroundColor: props.selected ? "#4AE262" : "" }}
      >
        <p style={{ color: props.title === "" ? "#ffffff" : "" }}>
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
