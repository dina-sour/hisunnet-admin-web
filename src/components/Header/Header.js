import React from "react";
import styled from "styled-components";
import { IconButton, Divider, Button } from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";

import Clock from "react-live-clock";

const Header = (props) => {

  return (
    <Container>
      <UserInfoGroup>
        <LiveClock ticking={true} />
        <GroupDivider orientation="vertical" />
        <LogoutButton onClick={props.handleLogout}>התנתקות</LogoutButton>
        <GroupDivider orientation="vertical" />
        <CurrentUser>{props.userName}</CurrentUser>
      </UserInfoGroup>
      <ClinicInfoGroup>
        <StyledIconButton onClick={props.handleClinicsMenu}>
          {props.isMenuOpen ? <ExpandLessIcon /> : <ExpandMoreIcon />}
        </StyledIconButton>
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
  && {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    width: 370px;
    margin-right: 70px;
    background-color: ${(props) => props.theme.header.background};
  }
`;

const StyledIconButton = styled(IconButton)`
  && {
    color: white;
    align-self: center;
  }
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
  font-size: 18px;
  direction: rtl;
`;

const UserInfoGroup = styled.div`
  display: flex;
  flex-direction: row;
  height: 45px;
  width: 253px;
  align-self: center;
  justify-content: space-between;
  align-items: center;
  margin-left: 20px;
`;

const LiveClock = styled(Clock)`
  color: #ffffff;
  font-family: Heebo;
  font-size: 14px;
  letter-spacing: 0;
  line-height: 21px;
  font-weight: 200;
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
  font-weight: 200;
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
