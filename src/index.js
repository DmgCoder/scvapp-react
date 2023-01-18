import React from "react";
import { createRoot } from "react-dom/client";
import store from "./app/store/store";
import { Provider } from "react-redux";
import RoutePage from "./Route/Route";

import "./index.css";

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RoutePage />
    </Provider>
  </React.StrictMode>
);
