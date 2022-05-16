import React, { Component } from "react";
import "./ticket.css";
import "./ticket1.css";
import { Link } from "react-router-dom";
import SidebarTicket from "./sidebarTicket";
import arrowIcon from "../../pictures/admin_page/arrow-right.svg";

export function OpenTickets() {
  return (
    <>
      <header className="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0 shadow">
        <a className="navbar-brand col-md-3 col-lg-2 me-0 px-3 fs-6" href="#">
          Ticket sistem - ŠCVApp
        </a>
        <script src="uikit/dist/js/uikit-icons.min.js"></script>
        <button
          className="navbar-toggler position-absolute d-md-none collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#sidebarMenu"
          aria-controls="sidebarMenu"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <input
          className="form-control form-control-dark w-100 rounded-0 border-0"
          type="text"
          placeholder="Išči"
          aria-label="Search"
        ></input>
        <div className="navbar-nav">
          <div className="nav-item text-nowrap">
            <Link className="nav-link px-3" to={"/admin"}>
              Nazaj
            </Link>
          </div>
        </div>
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
          crossOrigin="anonymous"
        />
        <script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"
          integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p"
          crossOrigin="anonymous"
        ></script>
      </header>
      <body>
        <div className="container-fluid">
          <div className="row">
            <SidebarTicket />

            <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
              <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                <h1 className="h2">Dashboard</h1>
                <div className="btn-toolbar mb-2 mb-md-0">
                  <div className="btn-group me-2">
                    <button
                      type="button"
                      className="btn btn-sm btn-outline-secondary"
                    >
                      Share
                    </button>
                    <button
                      type="button"
                      className="btn btn-sm btn-outline-secondary"
                    >
                      Export
                    </button>
                  </div>
                  <button
                    type="button"
                    className="btn btn-sm btn-outline-secondary dropdown-toggle"
                  >
                    <span
                      data-feather="calendar"
                      className="align-text-bottom"
                    ></span>
                    This week
                  </button>
                </div>
              </div>

              <div className="table-responsive">
                <table className="table table-striped table-sm">
                  <thead>
                    <tr>
                      <th scope="col">Zap. število</th>
                      <th scope="col">Naslov</th>
                      <th scope="col">Zadeva</th>
                      <th scope="col">Pošiljatelj</th>
                      <th scope="col">Status</th>
                      <th scope="col"></th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>2</td>
                      <td>Problem z prijavo</td>
                      <td>irrelevant</td>
                      <td>blaz.asdf@scv.si</td>
                      <td className="odprto">Odprto</td>
                      <td>
                        <img src={arrowIcon} alt=""></img>
                      </td>
                    </tr>
            
                  </tbody>
                </table>
              </div>
            </main>
          </div>
        </div>

        <script src="../assets/dist/js/bootstrap.bundle.min.js"></script>

        <script
          src="https://cdn.jsdelivr.net/npm/feather-icons@4.28.0/dist/feather.min.js"
          integrity="sha384-uO3SXW5IuS1ZpFPKugNNWqTZRRglnUJK6UAZ/gxOX80nxEkN9NcGZTftn6RzhGWE"
          crossOrigin="anonymous"
        ></script>
        <script
          src="https://cdn.jsdelivr.net/npm/chart.js@2.9.4/dist/Chart.min.js"
          integrity="sha384-zNy6FEbO50N+Cg5wap8IKA4M/ZnLJgzc6w2NqACZaK0u0FXfOWRRJOnQtpZun8ha"
          crossOrigin="anonymous"
        ></script>
      </body>
    </>
  );
}
