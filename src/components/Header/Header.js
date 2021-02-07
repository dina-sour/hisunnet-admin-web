import React from "react";
import styled from "styled-components";
import { Avatar } from "@material-ui/core";

const Header = (props) => {
  return (
    <Container>
        <CurrentUser>{props.userName}</CurrentUser>
        <ClinicInfoGroup>
          <ClinicName>דשבורד מתחמי חיסון אזור {props.area}</ClinicName>
          <MaccabiIcon>M</MaccabiIcon>
        </ClinicInfoGroup>
    </Container>
  );
};

const Container = styled.div`
  height: 100px;
  width: 100%;
  background: #d6e2f1;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const ClinicInfoGroup = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  width: 357px;
`;

const MaccabiIcon = styled(Avatar)`
  && {
    height: 40px;
    width: 40px;
    margin: 37px 40px 23px 20px;
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
