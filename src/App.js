import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Route, Switch, Redirect, BrowserRouter } from "react-router-dom";
import "./fonts.css";
import ClinicDetailsPage from "./pages/clinic-details/ClinicDetailsPage";
import LoginPage from "./pages/login/LoginPage";
import ClinicsPage from "./pages/clinics/ClinicsPage";
import firebase from "firebase";
import config from './configs/firebase-config.json';
import api from "./api";
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute';

//api.get()

if (!firebase.apps.length) {
  firebase.initializeApp(config);
  console.log(firebase.auth().currentUser);
}

const App = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  
  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        setLoggedIn(true);
        console.log("This is the user: ", user);
      } else {
        setLoggedIn(false);
        console.log("There is no logged in user");
      }
    });
  }, []);

  return (
      <AppContainer>
        <BrowserRouter>
          <Switch>
            <Route path="/login">
              <LoginPage />
            </Route>
            <ProtectedRoute loggedIn={loggedIn} path="/clinics">
              <ClinicsPage />
            </ProtectedRoute>
            <Route path="/clinic-details">
              <ClinicDetailsPage />
            </Route>
          </Switch>
        </BrowserRouter>
      </AppContainer>
  );
};

const AppContainer = styled.div`
  display: flex;
  height: 100vh;
  flex-direction: column;
  && {
    font-family: "Heebo", sans-serif;
  }
`;

export default App;
