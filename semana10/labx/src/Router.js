import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import CreateTripPage from "./components/CreateTripPage/CreateTripPage.js";
import HomePage from "./components/HomePage/HomePage.js";
import ListTripsPage from "./components/ListTripsPage/ListTripsPage.js";
import LoginPage from "./components/LoginPage/LoginPage.js";
import TripDetails from "./components/TripDetailsPage/TripDetailsPage.js";
import ApplicationPage from "./components/ApplicationPage/ApplicationPage.js";

export const Router = () => {
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
