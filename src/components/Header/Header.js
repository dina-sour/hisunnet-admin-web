import React from "react";
import styled from "styled-components";
import { Avatar, Accordion } from "@material-ui/core";
import Clock from 'react-live-clock';

const Header = (props) => {
  return (
    <Container>
        <CurrentUser>{props.userName}</CurrentUser>
        <ClinicInfoGroup>
          <ClinicName>מרפאה לחיסוני קורונה -  {props.area}</ClinicName>
          <ClinicIcon />
          <Clock format={'HH:MM'} ticking={true} timezone={'US/Pacific'} />
        </ClinicInfoGroup>
    </Container>
  );
};

const Container = styled.div`
  height: 100px;
  width: 100%;
  background-color: ${(props) => props.theme.header.background};
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  color: white;
`;

const ClinicInfoGroup = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  width: 357px;
`;

const ClinicIcon = styled.svg`
  && {
    height: 40px;
    width: 40px;
    margin: 37px 40px 23px 20px;
    background-image: url(${(props) => props.theme.clinicIcon});
  }
`;

const ClinicName = styled.div`
  margin: 45px 0 28px 0;
  font-size: 18px;
`;

const CurrentUser = styled.div`
  margin: 50px 0 29px 40.5px;
`;

export default Header;
