import React from "react";
import styled from "styled-components";
import { Avatar, Accordion, Divider, Button } from "@material-ui/core";
import Clock from "react-live-clock";

const Header = (props) => {
  return (
    <Container>
      <UserInfoGroup>
        <LiveClock ticking={true} />
        <GroupDivider orientation="vertical" />
        <LogoutButton>התנתקות</LogoutButton>
        <GroupDivider orientation="vertical" />
        <CurrentUser>{props.userName}</CurrentUser>
        <UserIcon />
      </UserInfoGroup>
      <ClinicInfoGroup>
        <ClinicName>מרפאה לחיסוני קורונה - {props.area}</ClinicName>
        <ClinicIcon />
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
  margin-right: 50px;
`;

const ClinicIcon = styled.svg`
  && {
    height: 29px;
    width: 75px;
    background-image: url(${(props) => props.theme.clinicIcon});
  }
`;

const GroupDivider = styled(Divider)`
  && {
    align-self: center;
    background-color: white;
    height: 24px;
  }
`;

const ClinicName = styled.div`
  margin: 45px 0 28px 0;
  font-size: 18px;
`;

const UserInfoGroup = styled.div`
  display: flex;
  flex-direction: row;
  height: 45px;
  width: 298px;
  align-self: center;
  justify-content: space-between;
  align-items: center;
`;

const LiveClock = styled(Clock)`
  color: #ffffff;
  font-family: Heebo;
  font-size: 14px;
  letter-spacing: 0;
  line-height: 21px;
`;

const CurrentUser = styled.div`
  height: 21px;
  width: 53px;
  color: #ffffff;
  font-family: Heebo;
  font-size: 14px;
  letter-spacing: 0;
  line-height: 21px;
  text-align: center;
`;

const UserIcon = styled(Avatar)`
  height: 45px;
  width: 45px;
  border-radius: 100px;
  background-color: white;
`;

const LogoutButton = styled(Button)`
  && {
    color: white;
    width: 119px;
    color: #ffffff;
    font-family: Heebo;
    font-size: 14px;
    letter-spacing: 0;
    line-height: 21px;
    font-weight: 250;
  }
`;
export default Header;
