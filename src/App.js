import React, { useState } from "react";
import styled from "styled-components";
import { Route, Switch } from "react-router-dom";
import "./fonts.css";
import ClinicDetailsPage from "./pages/clinic-details/ClinicDetailsPage";
import LoginPage from './pages/login/LoginPage';
import ClinicsPage from './pages/clinics/ClinicsPage';

function App() {
  const [area, setArea] = useState("תל אביב");
  const [userName, setUserName] = useState("דינה מטבייב");

  return (
    <AppContainer>
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
    </AppContainer>
  );
}

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  && {
    font-family: "Heebo", sans-serif;
  }
`;

export default App;
