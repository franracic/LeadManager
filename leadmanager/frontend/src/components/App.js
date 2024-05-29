import React from "react";
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

import { Provider } from "react-redux";
import store from "../store";
import NewData from "./data/NewData";
import Hero from "./landingPage/Hero";
import NewHeader from "./layout/NewHeader";
import dashboard from "./leads/Dashboard";
import NewAdmin from "./home/NewAdmin";
import NewAdminLeads from "./leads/NewAdminLeads";
import AdminMessages from "./messages/AdminMessages";
import Profile from "./team/Profile";

const alertOptions = {
  timeout: 3000,
  position: "top center",
};

function App() {
  return (
    <Provider store={store}>
      <AlertProvider template={AlertTemplate} {...alertOptions}>
        <Router>
          <div className="flex">
            <NewHeader />
            <Alerts />
            <Routes>
              <Route exact path="/" Component={Hero} />
              <Route
                exact
                path="/project"
                element={
                  <PrivateRoute
                    Component={NewAdmin}
                    ComponentAdmin={NewAdminLeads}
                  />
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
                  <PrivateRoute Component={Data} ComponentAdmin={NewData} />
                }
              />
              <Route exact path="/home" Component={NewAdmin} />
              <Route exact path="/register" Component={Register} />
              <Route exact path="/login" Component={Login} />
              <Route exact path="/kivi" Component={Profile} />
            </Routes>
            <Footer />
          </div>
        </Router>
      </AlertProvider>
    </Provider>
  );
}

const container = document.getElementById("app");
const root = createRoot(container);

root.render(<App />);
