import React from "react";
import styled from "styled-components";
import Clock from "react-live-clock";
import { Typography } from "@material-ui/core";

const AppointmentsInfo = (props) => {
  return (
    <Container>
      <AppointmentInfoText>מוזמנים </AppointmentInfoText>
      <AppointmentInfoText>{props.numberOfTodaysAttendees}</AppointmentInfoText>
      <AppointmentInfoText>|</AppointmentInfoText>
      <LiveClock ticking={true} />
      <AppointmentInfoText>שעה</AppointmentInfoText>
      <AppointmentInfoText>|</AppointmentInfoText>
      <AppointmentInfoText>
        רשימת מוזמנים להיום {new Date().toISOString().substring(0, 10)}
      </AppointmentInfoText>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  margin-top: 30px;
  width: 430px;
  align-self: flex-end;
`;

const AppointmentInfoText = styled(Typography)`
  && {
    font-family: Heebo;
  }
`;

const LiveClock = styled(Clock)`
  font-family: Heebo;
  font-size: 14px;
  letter-spacing: 0;
  line-height: 21px;
  font-weight: 400;
  color: black;
`;

export default AppointmentsInfo;
