import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Route, Switch, BrowserRoute, BrowserRouter } from "react-router-dom";
import "./fonts.css";
import ClinicDetailsPage from "./pages/clinic-details/ClinicDetailsPage";
import LoginPage from "./pages/login/LoginPage";
import ClinicsPage from "./pages/clinics/ClinicsPage";
import firebase from "firebase";

const config = {
  apiKey: "AIzaSyCtkLFzQrG8RAYz--GK3CneSVt4NL_9IrQ",
  authDomain: "vaccinet-9f0dc.firebaseapp.com",
};

if (!firebase.apps.length) {
  firebase.initializeApp(config);
  console.log(firebase.auth().currentUser);
}

const App = () => {

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
          console.log('This is the user: ', user)
      } else {
          console.log('There is no logged in user');
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
        <Route path="/clinics">
          <ClinicsPage />
        </Route>
        <Route path="/clinic-details">
          <ClinicDetailsPage />
        </Route>
      </Switch>
      </BrowserRouter>
    </AppContainer>
  );
}

const AppContainer = styled.div`
  display: flex;
  height: 100vh;
  flex-direction: column;
  && {
    font-family: "Heebo", sans-serif;  
    height: 100vh;
  }
`;

export default App;
