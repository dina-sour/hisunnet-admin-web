import React from "react";
import "./index.css";
import styled from "styled-components";
import { Avatar } from "@material-ui/core";
import ClinicDetailsPage from "./pages/clinic-details/ClinicDetailsPage";

function App() {
  return (
    <AppContainer>
      <Header>
        <p>שם משתמש כלשהו</p>
        <ClinicInfoGroup>
          <p>מתחם חיסונים בתל אביב</p>
          <MaccabiIcon>M</MaccabiIcon>
        </ClinicInfoGroup>
      </Header>
      <ClinicDetailsPage />
    </AppContainer>
  );
}

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const Header = styled.div`
  height: 100px;
  width: 100%;
  background: #d6e2f1;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const ClinicInfoGroup = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  width: 357px;
`;

const MaccabiIcon = styled(Avatar)`
  && {
    height: 40px;
    width: 40px;
  }
`;

export default App;
