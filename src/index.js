import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import CalcProvider from "./context/CalcContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // 3- wrap app with providerValue
  <CalcProvider>
    <App />
  </CalcProvider>
);
