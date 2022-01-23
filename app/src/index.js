import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";

import Routes from "./routes/Routes";
import MainLayout from "./commonComponent/MainLayout";

import "./index.css";
import store from "./store/configureStore";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <MainLayout>
          <Routes />
        </MainLayout>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
