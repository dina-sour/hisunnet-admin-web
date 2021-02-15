import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import Header from "../../components/Header/Header";
import { Button } from "@material-ui/core";
import firebase from "firebase";
import { useHistory } from "react-router-dom";

const ClinicsPage = (props) => {
  const history = useHistory();
  const [email, setEmail] = useState("");

const getEmail = () => {
  if (props.loggedIn) {
    let email = firebase.auth().currentUser.email;
    setEmail(email);
  }
}

  const mounted = useRef();
  useEffect(() => {
    if (!mounted.current) {
      getEmail();
      mounted.current = true;
    } else {
      getEmail();
    }
  });

  return (
    <Container>
      <Header userName={email} area="תל אביב" />
      <Button onClick={props.handleLogout}>Log out!</Button>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

export default ClinicsPage;
