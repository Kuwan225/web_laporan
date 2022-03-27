import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./pages/app/App";
import firebase from "./config/api";

ReactDOM.render(
  <BrowserRouter>
    <React.StrictMode>
      <App />
    </React.StrictMode>
    ,
  </BrowserRouter>,

  document.getElementById("root")
);
