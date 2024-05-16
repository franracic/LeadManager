import React, { Fragment, useEffect } from "react";
import { createRoot } from "react-dom/client";

import { Provider as AlertProvider } from "react-alert";
import AlertTemplate from "react-alert-template-basic";

import { Route, HashRouter as Router, Routes } from "react-router-dom";
import Login from "./accounts/Login";
import Register from "./accounts/Register";
import PrivateRoute from "./common/PrivateRoute";
import Data from "./data/Data";
import Alerts from "./layout/Alerts";
import Footer from "./layout/Footer";
import Header from "./layout/Header";
import Admin from "./leads/Admin";

import { Provider } from "react-redux";
import { loadUser } from "../actions/auth";
import store from "../store";
import Hero from "./landingPage/Hero";
import dashboard from "./leads/Dashboard";
import Leads from "./leads/Leads";
import AdminMessages from "./messages/AdminMessages";

const alertOptions = {
  timeout: 3000,
  position: "top center",
};

function App() {
  const isHomePage = false;
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);
  return (
    <Provider store={store}>
      <AlertProvider template={AlertTemplate} {...alertOptions}>
        <Router>
          <Fragment>
            {!isHomePage && <Header />}
            <Alerts />
            <Routes>
              <Route exact path="/" Component={Hero} />
              <Route
                exact
                path="/project"
                element={
                  <PrivateRoute Component={Leads} ComponentAdmin={Admin} />
                }
              />
              <Route
                exact
                path="/chat"
                element={
                  <PrivateRoute
                    Component={dashboard}
                    ComponentAdmin={AdminMessages}
                  />
                }
              />
              <Route
                exact
                path="/data"
                element={
                  <PrivateRoute Component={Data} ComponentAdmin={Data} />
                }
              />
              <Route exact path="/register" Component={Register} />
              <Route exact path="/login" Component={Login} />
            </Routes>
            {!isHomePage && <Footer />}
          </Fragment>
        </Router>
      </AlertProvider>
    </Provider>
  );
}

const container = document.getElementById("app");
const root = createRoot(container);

root.render(<App />);
