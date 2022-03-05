import React, { useRef, useState, useEffect } from "react";
import "./sidebar.css";
import { useLocation } from "react-router-dom";
import { isFirefox } from "react-device-detect";

import SidebarLink from "./sidebarLink";
import schoolLogo from "../pictures/school_logo.svg";
import Home_icon from "../pictures/icons_for_menu/Home.svg";
import Find_user_icon from "../pictures/icons_for_menu/Najdi_uporabnika.svg";
import Settings_icon from "../pictures/icons_for_menu/Nastavitve.svg";
import SIOMDM_icon from "../pictures/icons_for_menu/Open_out.svg";
import Office365_icon from "../pictures/icons_for_menu/office_365.svg";
import eAsistent_icon from "../pictures/icons_for_menu/eA.svg";
import Arnes_icon from "../pictures/icons_for_menu/arnes.svg";
import StatusIcon from "./statusIcon";

import OfficeWord_icon from "../pictures/office_icons/Word.svg";
import OfficeExcel_icon from "../pictures/office_icons/Excel.svg";
import Office365_icon_color from "../pictures/office_icons/Office365.svg";
import OfficeOneDrive_icon from "../pictures/office_icons/OneDrive.svg";
import OfficeOneNote_icon from "../pictures/office_icons/OneNote.svg";
import OfficePowerpoint_icon from "../pictures/office_icons/Powerpoint.svg";
import OfficeOutlook_icon from "../pictures/office_icons/Outlook.svg";
import OfficeTeams_icon from "../pictures/office_icons/Teams.svg";

import windowSize from "../classes/getWindowDimensions.js";
import OfficeAppEl from "./OfficeAppEl";
import ScheduleItem from "./scheduleItem";

export default function SideBar(props) {
  let pathname = useLocation().pathname;

  const [sideBarWidth, setSidebarWidth] = useState(300);

  const [officeAppMenu, setOfficeAppMenu] = useState({
    show: false,
    width: 500,
    top: "",
  });

  useEffect(() => {
    if (window.innerWidth < 1080) {
      setSidebarWidth(60);
    }
  }, []);

  let OfficeMenuBtn = useRef();
  let OfficeMenuPop = useRef();

  function MaxProfileInfo() {
    return (
      <>
        <div className="profileInfo">
          <p>{props.userData.displayName}</p>
          <span>{props.userData.mail}</span>
        </div>
        <a
          className="logoutBtn"
          onClick={props.logOutUser}
          title="Odjava"
          href={`${process.env.REACT_APP_BACKEND_URL}/user/logoutUrl/`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            fill={
              props.userData.school && props.userData.school.color === "#FFFFFF"
                ? "#ED1164"
                : "#ffffff"
            }
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
        </a>
      </>
    );
  }

  function closeOrOpenSideMenu() {
    if (sideBarWidth === 300) {
      setSidebarWidth(60);
    } else {
      setSidebarWidth(300);
    }
  }

  let winSize = windowSize();

  useEffect(() => {
    if (winSize.width > 1080) {
      setSidebarWidth(300);
    }
  }, [winSize]);

  function PopMenuContent() {
    return (
      <>
        <OfficeAppEl
          name="Word"
          href={`https://www.office.com/launch/word?auth=2&username=${props.userData.mail}&login_hint=${props.userData.mail}`}
        >
          <img alt="" src={OfficeWord_icon} />
        </OfficeAppEl>
        <OfficeAppEl
          name="Excel"
          href={`https://www.office.com/launch/excel?auth=2&username=${props.userData.mail}&login_hint=${props.userData.mail}`}
        >
          <img alt="" src={OfficeExcel_icon} />
        </OfficeAppEl>
        <OfficeAppEl
          name="PowerPoint"
          href={`https://www.office.com/launch/powerpoint?auth=2&username=${props.userData.mail}&login_hint=${props.userData.mail}`}
        >
          <img alt="" src={OfficePowerpoint_icon} />
        </OfficeAppEl>
        <OfficeAppEl
          name="Outlook"
          href={`https://outlook.office.com/owa/?realm=scv.si&exsvurl=1&ll-cc=1060&modurl=0&login_hint=${props.userData.mail}`}
        >
          <img alt="" src={OfficeOutlook_icon} />
        </OfficeAppEl>
        <OfficeAppEl
          name="OneDrive"
          href={`https://scvsi-my.sharepoint.com/personal/${props.userData.mail
            .replaceAll(".", "_")
            .replaceAll("@", "_")}/_layouts/15/onedrive.aspx?`}
        >
          <img alt="" src={OfficeOneDrive_icon} />
        </OfficeAppEl>
        <OfficeAppEl
          name="Teams"
          href={`https://aka.ms/mstfw?login_hint_safe=${props.userData.mail}`}
        >
          <img alt="" src={OfficeTeams_icon} />
        </OfficeAppEl>
        <OfficeAppEl
          name="OneNote"
          href={`https://www.office.com/launch/onenote?auth=2&username=${props.userData.mail}&login_hint=${props.userData.mail}`}
        >
          <img alt="" src={OfficeOneNote_icon} />
        </OfficeAppEl>
        <OfficeAppEl
          name="Odpri 365 portal"
          href={`https://www.office.com/?auth=2&username=${props.userData.mail}&login_hint=${props.userData.mail}`}
        >
          <img alt="" src={Office365_icon_color} />
        </OfficeAppEl>
      </>
    );
  }

  function ocOfficeAppMenu() {
    if (!officeAppMenu.show) {
      setOfficeAppMenu({
        show: true,
        width: officeAppMenu.width,
        top: officeAppMenu.top,
      });
      if (window.innerWidth <= 530 && sideBarWidth === 300) {
        closeOrOpenSideMenu();
      }
    } else {
      setOfficeAppMenu({
        show: false,
        width: officeAppMenu.width,
        top: officeAppMenu.top,
      });
    }
  }

  useEffect(() => {
    // if(officeAppMenu.show){
    let newTop = "";
    let newWidth = officeAppMenu.width;

    let mainContentWidth = window.innerWidth - sideBarWidth;
    if (mainContentWidth <= 260) {
      newWidth = 125;
    } else if (mainContentWidth <= 385) {
      newWidth = 125;
    } else if (mainContentWidth <= 510) {
      newWidth = 375;
    } else {
      newWidth = 500;
    }

    let calculation =
      OfficeMenuBtn.current.offsetTop + OfficeMenuPop.current.clientHeight >=
      window.innerHeight;

    if (!calculation) {
      newTop = `${
        OfficeMenuBtn.current.offsetTop -
        OfficeMenuPop.current.clientHeight / 2 +
        OfficeMenuBtn.current.clientHeight / 2
      }px`;
    }

    setOfficeAppMenu({
      show: officeAppMenu.show,
      width: newWidth,
      top: newTop,
    });
    // }
  }, [window.innerHeight, window.innerWidth, officeAppMenu.show, sideBarWidth]);

  return (
    <>
      <div
        className="sideBarFix"
        style={{ minWidth: winSize.width > 1080 ? "300px" : "60px" }}
      ></div>
      <div className="wrapper">
        <div
          className="sidebar"
          style={
            props.userData.school && {
              backgroundColor: props.userData.school.color,
              width: `${sideBarWidth}px`,
            }
          }
        >
          <main
            className="main"
            style={{ minHeight: sideBarWidth >= 300 ? "940px" : "750px" }}
          >
            <div className="upHalf">
              {sideBarWidth >= 300 ? (
                <div className="closeArrow" onClick={closeOrOpenSideMenu}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    fill="currentColor"
                    className="bi bi-arrow-left"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fillRule="evenodd"
                      d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"
                    />
                  </svg>
                </div>
              ) : (
                <></>
              )}
              {sideBarWidth >= 300 ? (
                <img
                  alt=""
                  src={schoolLogo}
                  title={props.userData.school && props.userData.school.name}
                ></img>
              ) : (
                <svg
                  onClick={closeOrOpenSideMenu}
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  fill="currentColor"
                  className="bi bi-list openMenuBtn"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
                  />
                </svg>
              )}
              <ul className="links">
                <SidebarLink
                  name="Domača stran"
                  href="/"
                  pathname={pathname}
                  size={sideBarWidth}
                >
                  <img alt="" src={Home_icon} />
                </SidebarLink>
                <SidebarLink
                  name="Malice"
                  href="/malice"
                  pathname={pathname}
                  size={sideBarWidth}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="24px"
                    viewBox="0 0 24 24"
                    width="24px"
                    fill="#000000"
                  >
                    <path d="M0 0h24v24H0V0z" fill="none" />
                    <path d="M1 21.98c0 .56.45 1.01 1.01 1.01H15c.56 0 1.01-.45 1.01-1.01V21H1v.98zM8.5 8.99C4.75 8.99 1 11 1 15h15c0-4-3.75-6.01-7.5-6.01zM3.62 13c1.11-1.55 3.47-2.01 4.88-2.01s3.77.46 4.88 2.01H3.62zM1 17h15v2H1zM18 5V1h-2v4h-5l.23 2h9.56l-1.4 14H18v2h1.72c.84 0 1.53-.65 1.63-1.47L23 5h-5z" />
                  </svg>
                </SidebarLink>
                <SidebarLink
                  name="eAsistent"
                  href="/easistent"
                  pathname={pathname}
                  size={sideBarWidth}
                >
                  <img alt="" src={eAsistent_icon} />
                </SidebarLink>
                <SidebarLink
                  name="Poišči osebo"
                  pathname={pathname}
                  size={sideBarWidth}
                >
                  <img alt="" src={Find_user_icon} />
                </SidebarLink>
                <SidebarLink
                  name="Nastavitve"
                  pathname={pathname}
                  href="/nastavitve"
                  size={sideBarWidth}
                >
                  <img alt="" src={Settings_icon} />
                </SidebarLink>
                <li className={`sideLink`}>
                  <a
                    href="https://mdm.arnes.si/Prijava/Login.aspx"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="link">
                      <div className="icon">
                        <img alt="" src={SIOMDM_icon} />
                      </div>
                      {sideBarWidth >= 300 ? (
                        <span className="item">SIO.MDM Prijava</span>
                      ) : (
                        ""
                      )}
                    </div>
                  </a>
                </li>
                <SidebarLink
                  name="Arnes učilnice"
                  pathname={pathname}
                  href="/arnes-ucilnice"
                  size={sideBarWidth}
                >
                  <img alt="" src={Arnes_icon} />
                </SidebarLink>
                <li
                  className="sideLink-PopMenu sideLink"
                  onClick={ocOfficeAppMenu}
                  ref={OfficeMenuBtn}
                >
                  <a target="_blank" rel="noopener noreferrer">
                    <div className="link">
                      <div className="icon">
                        <img alt="" src={Office365_icon} />
                      </div>
                      {sideBarWidth >= 300 ? (
                        <span className="item">Office programi</span>
                      ) : (
                        ""
                      )}
                      {sideBarWidth >= 300 ? (
                        <div className="arrowIcon">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            height="24"
                            fill="currentColor"
                            className="bi bi-chevron-right"
                            viewBox="0 0 16 16"
                            style={{
                              transform: officeAppMenu.show
                                ? "rotate(-180deg)"
                                : "",
                              transition: "transform 0.3s ease-in-out",
                            }}
                          >
                            <path
                              fillRule="evenodd"
                              d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
                            />
                          </svg>
                        </div>
                      ) : (
                        <></>
                      )}
                    </div>
                  </a>
                </li>
              </ul>
              <ScheduleItem
                userData={props.userData}
                style={{ display: sideBarWidth >= 300 ? "" : "none" }}
              />
            </div>
            <div className="downHalf">
              {sideBarWidth < 300 ? (
                <div className="logoutBtn">
                  <a onClick={props.logOutUser} title="Odjava">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="32"
                      height="32"
                      fill={
                        props.userData.school &&
                        props.userData.school.color === "#FFFFFF"
                          ? "#ED1164"
                          : "#ffffff"
                      }
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
                  </a>
                </div>
              ) : (
                <></>
              )}

              <div className="userProfile">
                <div className={"profilePictureAndIcon"}>
                  <img
                    alt=""
                    src={`${process.env.REACT_APP_BACKEND_URL}/user/get/profilePicture`}
                    className="profilePicture"
                  ></img>
                  {props.userData.status && (
                    <StatusIcon
                      className="statusIcon"
                      status={props.userData.status}
                    />
                  )}
                </div>
                {sideBarWidth >= 300 ? <MaxProfileInfo /> : <></>}
              </div>
            </div>
          </main>
        </div>
      </div>
      <div
        className="popMenu"
        style={
          props.userData.school && {
            opacity: officeAppMenu.show ? "1" : "0",
            left: `${sideBarWidth}px`,
            color: isFirefox
              ? props.userData.school.color === "#FFFFFF"
                ? "#ED1164"
                : "#ffffff"
              : props.userData.school.color === "#FFFFFF"
              ? "#ED1164"
              : props.userData.school.color,
            width: `${officeAppMenu.width}px`,
            visibility: officeAppMenu.show ? "visible" : "hidden",
            position: "absolute",
            backgroundColor: !isFirefox
              ? `${props.userData.school.color}45`
              : `${props.userData.school.color}c4`,
            top: officeAppMenu.top,
          }
        }
        ref={OfficeMenuPop}
      >
        <PopMenuContent />
      </div>
      {officeAppMenu.show && (
        <div className="closeOfficeMenuBtn" onClick={ocOfficeAppMenu}></div>
      )}
    </>
  );
}
