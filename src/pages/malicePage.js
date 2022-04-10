import React, { useEffect, useRef, useState } from "react";

import "./malicePage.css";
import windowSize from "../classes/getWindowDimensions.js";
import MalicaJed from "../components/maliceData"

import mesniMeniPicture from "../pictures/slike_malica/mesni_meni.png"
import vegiMeniPicture from "../pictures/slike_malica/vegi_meni.png"
import hamburgerPicture from "../pictures/slike_malica/hamburger.png"
import kmeckiSendvicPicture from "../pictures/slike_malica/kmecki_sendvic.png"
import tunaSendvicPicture from "../pictures/slike_malica/sendvic_s_tuno.png"
import sirovSendvicPicture from "../pictures/slike_malica/sendvic_s_sirom.png"
import pizzaPicture from "../pictures/slike_malica/pizza.png"
import pizzaMargeritePicture from "../pictures/slike_malica/pizza_margerite.png"
import solataPicture from "../pictures/slike_malica/solata.png"
import brezMalicePicture from "../pictures/slike_malica/brez_malice.png"

let jediZaDanes = []

jediZaDanes.push(new MalicaJed("Mesni meni","Perutniče v medeni omaki",mesniMeniPicture,true))
jediZaDanes.push(new MalicaJed("Vegi meni","Sirnica",vegiMeniPicture))
jediZaDanes.push(new MalicaJed("Pizza","Klasična pizza",pizzaPicture))
jediZaDanes.push(new MalicaJed("Pizza margerite","Pizza margerite",pizzaMargeritePicture))
jediZaDanes.push(new MalicaJed("Hamburger","Hamburger",hamburgerPicture))
jediZaDanes.push(new MalicaJed("Solata","Solata",solataPicture))
jediZaDanes.push(new MalicaJed("Sendvič s tuno","Sendvič s tuno",tunaSendvicPicture))
jediZaDanes.push(new MalicaJed("Kmečki sendvič","Kmečki sendvič",kmeckiSendvicPicture))
jediZaDanes.push(new MalicaJed("Sendvič s sirom","Sendvič s sirom",sirovSendvicPicture))
jediZaDanes.push(new MalicaJed("Brez malice","Brez malice",brezMalicePicture))

export default function MalicePage(props) {
  let ref = useRef()
  const [sizeOfParentDatePicker, setSizeOfParentDatePicker] = useState(0)
  let winSize = windowSize();


  useEffect(()=>{
    setSizeOfParentDatePicker(ref.current.offsetWidth)
  },[])
  useEffect(()=>{
    setSizeOfParentDatePicker(ref.current.offsetWidth)
  },[winSize.width])

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
          </div>
        </div>
        <div className="maliceContent">
          <div className="maliceContent-DateSelect" ref={ref}>
            <button>
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
            <MaliceSelectingDateBoxes widthOfParent={sizeOfParentDatePicker}/>
            <button>
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
  const [hightOfBox, setHightOfBox] = useState(getSize(props.widthOfParent * 0.08));
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
    let numItems = parseInt((props.widthOfParent-120) / (hightOfBox + 20));
    if (numItems >= 1) {
      setNumberOfBoxes(numItems);
    }else{
      setNumberOfBoxes(1);
    }
  }, [hightOfBox]);
  useEffect(() => {
    setHightOfBox(getSize(props.widthOfParent * 0.08));
    let numItems = parseInt((props.widthOfParent-140) / (hightOfBox + 20));
    if (numItems >= 1) {
      setNumberOfBoxes(numItems);
    }else{
      setNumberOfBoxes(1);
    }
  }, [props.widthOfParent]);

  for (let i = 0; i < numberOfBoxes; i++) {
    let danMillis = 86400000;
    let dan = new Date(dateNow.getTime() + danMillis * i);
    boxes.push(
      <MaliceSelectingDateBox
        title={getDateTitle(dateNow, dan)}
        selected={i == 0 ? true : false}
        day={dneviVTednu[dan.getDay()] ?? ""}
        date={getStringDate(dan)}
        hightOfBox={hightOfBox}
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
    >
      <div
        className="maliceContent-DateSelect-Box-Content"
        style={{ backgroundColor: props.selected ? "#4AE262" : "" }}
      >
        <p style={{ color: props.title == "" ? "#ffffff" : "" }}>
          {props.title == "" ? "A" : props.title}
        </p>
        <b>{props.day}</b>
        <p>{props.date}</p>
      </div>
    </div>
  );
}

function MaliceContentMeals(){
  let meals = []
  for(let i = 0;i<jediZaDanes.length;i++){
    let jed = jediZaDanes[i]
    meals.push(<MaliceContentMeal ime={jed.ime} opis={jed.opis} img={jed.slika} izbran={jed.izbran}/>)
  }
  return meals
}

function MaliceContentMeal(props){
  return(
    <div className="maliceContent-selectMeal-Meal" style={props.izbran?{border:"2px solid #03c316",color:"#03C316"}:{}}>
        <div className="maliceContent-selectMeal-Meal-Content">
          <div className="maliceContent-selectMeal-Meal-Right">
            <b>
              {props.ime}
            </b>
            <p>
              {props.opis}
            </p>
          </div>
          <div className="maliceContent-selectMeal-Meal-Left">
            {!props.izbran ? 
            <button>
              Izberi meni
            </button>:
            <button style={{backgroundColor:"#03C316",cursor:"auto"}}>
              Izbran
            </button>
            }
            <img src={props.img} alt=""></img>
          </div>
        </div>
    </div>
  )
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
