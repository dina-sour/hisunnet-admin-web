// Import FirebaseAuth and firebase.
import React, { useState, useEffect } from "react";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import firebase from "firebase";
import styled from "styled-components";
import { Controller, useForm } from "react-hook-form";
import { Avatar, TextField, Paper, Button } from "@material-ui/core";

const config = {
  apiKey: "AIzaSyCtkLFzQrG8RAYz--GK3CneSVt4NL_9IrQ",
  authDomain: "vaccinet-9f0dc.firebaseapp.com",
};

if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

const LoginPage = () => {
  const [loginFailed, setLoginFailed] = useState(false);
  const { control, handleSubmit } = useForm();
  const [loginData, setLoginData] = useState({});

  const onLoginSubmit = (data) => {
    console.log(data);
  };

  const loginField = (key, title) => {
    return (
      <Controller
        name={key}
        as={<LoginField variant="outlined" placeholder={title} />}
        control={control}
        defaultValue=""
        rules={{ required: true }}
      />
    );
  };

  return (
    <Container>
      <MaccabiIcon>M</MaccabiIcon>
      <Title>מערכת מלאי חיסוני עודפים</Title>
      <LoginBox elevation={2}>
        <LoginBoxTitle>פרטי משתמש</LoginBoxTitle>
        <LoginForm>
          {loginField("email", "אימייל")}
          {loginField("password", "מספר טלפון")}
        </LoginForm>
        <ButtonGroup>
          <LoginButton onClick={handleSubmit(onLoginSubmit)} color="primary" variant="contained">
            כניסה
          </LoginButton>
          <ForgorPasswordLink href='https://www.google.com/'>שכחתי סיסמא</ForgorPasswordLink>
        </ButtonGroup>
      </LoginBox>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background-color: #f9fafc;
  height: 100vh;
`;

const MaccabiIcon = styled(Avatar)`
  && {
    height: 60px;
    width: 60px;
    margin: 80px 0 20px 0;
  }
`;

const Title = styled.div`
  color: #141414;
  font-size: 18px;
  font-weight: bold;
`;

const LoginBox = styled(Paper)`
  height: 487px;
  width: 534px;
  margin-top: 60px;
  && {
    border-radius: 30px;
    background-color: #ffffff;
    box-shadow: 0 2px 14px 0 rgba(0, 0, 0, 0.1);
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

const LoginBoxTitle = styled.div`
  height: 41px;
  color: #141414;
  font-size: 28px;
  font-weight: 300;
  letter-spacing: 0;
  line-height: 41px;
  margin: 60px 0 47px 0;
`;

const LoginForm = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 140px;
  width: 315px;
`;

const LoginField = styled(TextField)`
  width: 100%;
  height: 51px;
  direction: rtl;
  border: 1px solid #b9b9b9;
  font-size: 14px;
  & input {
    font-family: Heebo;
  }
  & fieldset {
    border-radius: 100px;
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  margin-top: 40px;
`;

const LoginButton = styled(Button)`
  && {
    background-color: #0d47a1;
    color: white;
    border-radius: 100px;
    height: 48px;
    width: 180px;
    font-family: Heebo;
    font-size: 14px;
  }
  &:hover {
    background-color: #0d47a1;
  }
`;

const ForgorPasswordLink = styled.a`
  text-decoration: underline;
  height: 21px;
  color: #525558;
  font-family: Heebo;
  font-size: 14px;
  letter-spacing: 0;
  line-height: 21px;
  margin-top: 51px;
`;

export default LoginPage;
