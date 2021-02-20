// Import FirebaseAuth and firebase.
import React, { useState, useEffect } from "react";
import firebase from "firebase";
import styled from "styled-components";
import { Controller, useForm, reset } from "react-hook-form";
import { Avatar, TextField, Paper, Button } from "@material-ui/core";
import config from '../../configs/firebase-config.json';
import { useHistory  } from 'react-router-dom';

if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

const LoginPage = (props) => {
  const [loginFailed, setLoginFailed] = useState(false);
  const [loginErrorMessage, setLoginErrorMessage] = useState("");
  const { control, handleSubmit, reset } = useForm();
  const history = useHistory();

  const onLoginSubmit = (data) => {
      const auth =  firebase.auth()
      .signInWithEmailAndPassword(data.email, data.password);
      auth.then((res) => {
        history.push(props.redirect);
        console.log(res);
      });
      auth.catch((err) => {
        console.log("unable to login!", err);
        setLoginFailed(true);
        switch(err.code) {
          case 'auth/user-disabled':
            setLoginErrorMessage('המשתמש חסום');
            break;
          case 'auth/user-not-found':
            setLoginErrorMessage('המשתמש אינו קיים במערכת');
            break;
          case 'auth/network-request-failed':
            setLoginErrorMessage('שגיאת רשת');
            break;
          case 'auth/wrong-password':
            setLoginErrorMessage('הסיסמא שהקלדת אינה נכונה. אנא נסה שנית');
            break;
          default: 
          setLoginErrorMessage('קרתה שגיאה, נסו יותר מאוחר');
            break;
        }
        reset({});
      });
  };

  const loginField = (key, title, type) => {
    return (
      <Controller
        name={key}
        as={<LoginField variant="outlined" placeholder={title} type={type} />}
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
          {loginField("password", "סיסמה", "password")}
        </LoginForm>
        <ButtonGroup>
          {
            loginFailed
            ? <LoginFailMessage>{loginErrorMessage}</LoginFailMessage>
            : null
          }
          <LoginButton onClick={handleSubmit(onLoginSubmit)} color="primary" variant="contained">
            כניסה
          </LoginButton>
          <ForgotPasswordLink href='/clinics'>שכחתי סיסמה</ForgotPasswordLink>
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
  background-color: ${(props) => props.theme.general.lightBackground};
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
  font-weight: 500;
  font-family: 'Heebo';
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
  & label {
    color: #525558;
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
    background-color: ${(props) => props.theme.general.main};
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

const ForgotPasswordLink = styled.a`
  text-decoration: underline;
  height: 21px;
  color: #525558;
  font-family: Heebo;
  font-size: 14px;
  letter-spacing: 0;
  line-height: 21px;
  margin-top: 51px;
`;

const LoginFailMessage = styled.div`
  font-size: 12px;
  color: red;
  margin-bottom: 12px;
`;

export default LoginPage;
