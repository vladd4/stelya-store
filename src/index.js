import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App";
import reportWebVitals from "./reportWebVitals";

import { BrowserRouter } from "react-router-dom";

import { Provider } from "react-redux";
import { store } from "./redux/store";

import ReactPixel from "react-facebook-pixel";

import "./i18n";

const options = {
  autoConfig: true, // set pixel's autoConfig
  debug: false, // enable logs
};

ReactPixel.init("225984620448196", options);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>
);

reportWebVitals();
