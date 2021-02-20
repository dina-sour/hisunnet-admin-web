import React from "react";
import styled from "styled-components";
import { Paper } from "@material-ui/core";

const VaccinesTab = (props) => {
  return (
    <Container>
      <RemainingVaccinesGroup></RemainingVaccinesGroup>
      <AppointmentsInfoGroup>
        <Title>עודפי חיסונים</Title>
        <DetailText>140</DetailText>
        <Title>שעות קבלה </Title>
        <DetailText>140</DetailText>
      </AppointmentsInfoGroup>
    </Container>
  );
};

const Container = styled(Paper)`
  && {
    display: flex;
    flex-direction: row;
    height: 201px;
    width: 344px;
    margin-left: auto;
  }
`;

const RemainingVaccinesGroup = styled.div`
  display: flex;
  flex-direction: column;
`;

const AppointmentsInfoGroup = styled.div`
  display: flex;
  flex-direction: column;
`;

const DetailText = styled.div`
  color: ${(props) => props.theme.header.background};
`;

const Title = styled.div``;

export default VaccinesTab;
