import React from "react";
import ReactDOM from "react-dom/client";
import "./assets/styles/globals.css";
import RouterProvider from "./provider/RouterProvider";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider />
  </React.StrictMode>
);
