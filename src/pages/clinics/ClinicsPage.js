import React from 'react';
import styled from 'styled-components';
import Header from '../../components/Header/Header';

const ClinicsPage = (props) => {
  return (
    <Container>
      <Header userName='דינה מטבייב' area='תל- אביב יפו'/>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
`;

export default ClinicsPage;
