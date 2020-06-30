import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import CreateTripPage from "./CreateTripPage/CreateTripPage.js";
import HomePage from "./HomePage/HomePage.js";
import ListTripsPage from "./ListTripsPage/ListTripsPage.js";
import LoginPage from "./LoginPage/LoginPage.js";
import TripDetails from "./TripDetailsPage/TripDetailsPage.js";
import ApplicationPage from "./ApplicationPage/ApplicationPage.js";

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route exact path="/application-form">
          <ApplicationPage />
        </Route>
        <Route exact path="/login">
          <LoginPage />
        </Route>
        <Route exact path="/trips/create">
          <CreateTripPage />
        </Route>
        <Route exact path="/trips/list">
          <ListTripsPage />
        </Route>
        <Route exact path="/trips/details">
          <TripDetails />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
