import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { Provider } from "react-redux";
import store from "./store";
// import { Auth0Provider } from "@auth0/auth0-react";

ReactDOM.createRoot(document.getElementById("root")).render(
  // <Auth0Provider
  //   domain="dev-b1jgfzu5x1tvle0v.us.auth0.com"
  //   clientId="fzfT4iMBJ9X9V3FGFV3wlzZcCz0pLJBJ"
  //   authorizationParams={{
  //     redirect_uri: window.location.origin,
  //   }}
  // >
    <Provider store={store}>
      <App />
    </Provider>
  // </Auth0Provider>
);
