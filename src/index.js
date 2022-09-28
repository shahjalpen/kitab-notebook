import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import "boxicons";

import configureStore from "./client/stores/stores.js"; //Store
import "normalize.css"; //Normalize CSS
import "./client/assets/img/icon-book-small.ico"; //Favicon
import "./client/assets/theme/theme.scss"; //Theme
import MainWrapper from "./client/views/Layout/MainWrapper"; //Wrapper
import "./client/utils/DefaultKeyEvents"

ReactDOM.render(
  <Provider store={configureStore()}>
    <MainWrapper />
  </Provider>,
  document.getElementById("kitab-container")
);

if (module.hot) module.hot.accept();
