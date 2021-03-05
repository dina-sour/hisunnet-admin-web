import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Route, Switch, Redirect, BrowserRouter } from "react-router-dom";
import "./fonts.css";
import ClinicDetailsPage from "./pages/clinic-details/ClinicDetailsPage";
import LoginPage from "./pages/login/LoginPage";
import ClinicsPage from "./pages/clinics/ClinicsPage";
import firebase from "firebase";
import config from "./configs/firebase-config.json";
import api from "./api";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";
import { useHistory } from "react-router-dom";
import Theme from "./Theme";
import { ThemeStore } from "./contexts/ThemeStore";
import { SnackbarProvider } from 'notistack';

if (!firebase.apps.length) {
  firebase.initializeApp(config);
  console.log(firebase.auth().currentUser);
}

const App = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const history = useHistory();

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        setLoggedIn(true);
        console.log("This is the user: ", user.email);
      } else {
        setLoggedIn(false);
        history.push("/login");
        console.log("There is no logged in user");
      }
    });
  }, []);

  const handleLogout = () => {
    firebase
      .auth()
      .signOut()
      .then(() => {
        setLoggedIn(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <ThemeStore>
      <Theme>
      <SnackbarProvider maxSnack={3}>
      <AppContainer>
        <Switch>
          <Route exact path="/login">
            <LoginPage redirect="/clinics" />
          </Route>
          <ProtectedRoute path="/clinics">
            <ClinicsPage loggedIn={loggedIn} handleLogout={handleLogout} />
          </ProtectedRoute>
          <Route path="/clinic-details">
            <ClinicDetailsPage />
          </Route>
        </Switch>
      </AppContainer>
      </SnackbarProvider>
      </Theme>
    </ThemeStore>
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
