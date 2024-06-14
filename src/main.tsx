import React from "react";
import ReactDOM from "react-dom/client";
import "./assets/styles/globals.css";
import RouterProvider from "./provider/RouterProvider";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { Provider } from "react-redux";
import store from "./redux/store";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <GoogleOAuthProvider clientId="642217120797-cnb57uhg5a6k0bimgihtfs0sril81mm3.apps.googleusercontent.com">
      <Provider store={store}>
        <RouterProvider />
      </Provider>
    </GoogleOAuthProvider>
  </React.StrictMode>
);
