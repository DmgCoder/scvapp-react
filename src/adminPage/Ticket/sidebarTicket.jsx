import React, { Component } from "react";
import "./ticket.css";
import "./ticket1.css";
import { Link } from "react-router-dom";
export function SidebarTicket() {
  return (
    <>
      <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
        rel="stylesheet"
        integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
        crossorigin="anonymous"
      />
      <script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p"
        crossorigin="anonymous"
      ></script>
      <nav
        id="sidebarMenu"
        className="col-md-3 col-lg-2 d-md-block bg-light admin-ticket-sidebar collapse"
      >
        <div className="position-sticky pt-3">
          <ul className="nav flex-column">
            <li className="nav-item">
              <a
                className="nav-link active"
                aria-current="page"
                href="/admin/ticket/home"
              >
                {/* <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-home align-text-bottom" aria-hidden="true"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg> */}
                <span data-feather="home" className="align-text-bottom"></span>
                Nadzorna plošča
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/admin/ticket/my">
                <span data-feather="file" className="align-text-bottom"></span>
                Moji ticketi
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/admin/ticket/open">
                <span data-feather="users" className="align-text-bottom"></span>
                Odprti ticketi
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                <span
                  data-feather="bar-chart-2"
                  className="align-text-bottom"
                ></span>
                Zaprti ticketi
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                <span
                  data-feather="layers"
                  className="align-text-bottom"
                ></span>
                Vsi ticketi
              </a>
            </li>
          </ul>

          <h6 className="admin-ticket-sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted text-uppercase">
            <span>Nastavitve</span>
            <a
              className="link-secondary"
              href="#"
              aria-label="Add a new report"
            >
              <span
                data-feather="plus-circle"
                className="align-text-bottom"
              ></span>
            </a>
          </h6>
          <ul className="nav flex-column mb-2">
            <li className="nav-item">
              <a className="nav-link" href="#">
                <span
                  data-feather="file-text"
                  className="align-text-bottom"
                ></span>
                Moj profil
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                <span
                  data-feather="file-text"
                  className="align-text-bottom"
                ></span>
                Nastavitev odsotnosti
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                <span
                  data-feather="file-text"
                  className="align-text-bottom"
                ></span>
                Poročilo
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}
export default SidebarTicket;
