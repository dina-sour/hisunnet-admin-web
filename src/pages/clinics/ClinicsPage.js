import React from 'react';
import styled from 'styled-components';
import Header from '../../components/Header/Header';
import { Button } from '@material-ui/core';
import firebase from "firebase";

const ClinicsPage = (props) => {

  const handleLougout = () => {
    firebase.auth().signOut();
  }

  return (
    <Container>
      <Header userName='דינה מטבייב' area='תל אביב'/>
      <Button onClick={handleLougout} >Log out!</Button>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

export default ClinicsPage;
