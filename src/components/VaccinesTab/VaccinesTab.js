import React from "react";
import styled from "styled-components";
import { Paper, Typography, Button } from "@material-ui/core";
import { HouseRounded } from "@material-ui/icons";

const VaccinesTab = (props) => {
  return (
    <Container>
      <AppointmentsInfoGroup>
        <Title>מספר תורים שנקבעו</Title>
        <DetailText>140</DetailText>
        <Title>שעות קבלה </Title>
        {
          props.isTimeRange
          ? <DetailText>מ- {props.startTime} עד {props.endTime}</DetailText>

        : props.hours!==undefined
        ? <DetailText>בשעות {props.hours.join(', ')}</DetailText>
        : null
        }
        <StopAppointmentsButton onClick={props.onDeleteVaccines} color='primary' variant="contained" >עצירת זימונים</StopAppointmentsButton>
      </AppointmentsInfoGroup>
      <RemainingVaccinesGroup>
        <RemainingVaccines>
          <NumberOfVaccines variant="h3">
            {props.remainingVaccines}
          </NumberOfVaccines>
          <RemainingVaccinesTitle>עודפי חיסונים</RemainingVaccinesTitle>
        </RemainingVaccines>
        <EditButton>עריכה</EditButton>
      </RemainingVaccinesGroup>
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
    justify-content: space-between;
    margin: 0 20px 0 20px
  }
`;

const RemainingVaccinesGroup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px;
  color: ${(props) => props.theme.general.main};
`;

const RemainingVaccines = styled.div`
  display: flex;
  flex-direction: column;
  height: 110px;
  width: 110px;
  border-radius: 10px;
  text-align: center;
  background: linear-gradient(
    180deg,
    ${(props) => props.theme.general.lightBackground} 0%,
    rgba(214, 226, 241, 0.6) 100%
  );
`;

const NumberOfVaccines = styled(Typography)`
  && {
    font-size: 28px;
    margin-top: 28px;
    font-weight: bold;
    letter-spacing: 0;
    line-height: 28px;
    text-align: center;
  }
`;

const EditButton = styled(Button)`
  && {
    border: 1px solid ${(props) => props.theme.general.main};
    color: ${(props) => props.theme.general.main};
    background-color: white;
    border-radius: 100px;
    font-family: Heebo;
    font-size: 14px;
    height: 28px;
    width: 120px;
    margin-top: 20px;
  }
  &:hover {
    background-color: #0d47a1;
  }
`;

const AppointmentsInfoGroup = styled.div`
  display: flex;
  flex-direction: column;
  text-align: right;
  height: 110px;
  margin: 20px;
`;

const DetailText = styled.div`
  color: ${(props) => props.theme.general.main};
  font-size: 16px;
  font-weight: 500;
  margin-bottom: 20px;
`;

const Title = styled.div`
  font-size: 14px;
`;

const StopAppointmentsButton = styled(Button)`
  && {
    background-color: ${(props) => props.theme.general.main};
    color: white;
    border-radius: 100px;
    height: 28px;
    width: 120px;
    font-family: Heebo;
    font-size: 14px;
    align-self: center;
  }
  &:hover {
    background-color: ${(props) => props.theme.general.main};
  }
`;

const RemainingVaccinesTitle = styled.div`
  color:${(props) => props.theme.general.main};
  font-family: Heebo;
  font-size: 14px;
  margin-top: 5px;
`;

export default VaccinesTab;
