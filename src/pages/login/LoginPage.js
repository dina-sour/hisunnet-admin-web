// Import FirebaseAuth and firebase.
import React, { useEffect } from "react";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import firebase from "firebase";
import styled from "styled-components";

const config = {
  apiKey: "AIzaSyCtkLFzQrG8RAYz--GK3CneSVt4NL_9IrQ",
  authDomain: "vaccinet-9f0dc.firebaseapp.com",
};

if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

const uiConfig = {
  signInSuccessUrl: "/clinics",
  signInOptions: [
    {
      provider: firebase.auth.EmailAuthProvider.PROVIDER_ID,
      requireDisplayName: false,
    },
  ],
};

const LoginPage = () => {
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      localStorage.setItem("user", user.email);
    } else {
      localStorage.removeItem("user");
    }
  });

  return (
    <Container>
      <Header>
        <h1>מכבי - חיסונט</h1>
      </Header>
      <p>נא להירשם בעזרת כתובת מייל וסיסמא</p>
      <AuthBox uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

const Header = styled.div`
  height: 100px;
  width: 100%;
  background-color: #3f51b5;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 20px;
`;

const AuthBox = styled(StyledFirebaseAuth)`
  width: 100%;
  height: 15%;
`;

export default LoginPage;
