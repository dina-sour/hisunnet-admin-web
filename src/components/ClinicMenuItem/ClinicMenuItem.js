import React from "react";
import styled from "styled-components";
import { MenuItem, Typography } from "@material-ui/core";
import CheckRoundedIcon from '@material-ui/icons/CheckRounded';

const ClinicMenuItem = React.forwardRef((props, ref) => {
  return (
    <Container onClick={props.onClinicCheck} ref={ref}>
      <Description>
        <Title>
        מרפאה לחיסוני קורונה - {props.clinicName}
        </Title>
        <Subtitle>{props.address}</Subtitle>
      </Description>
      {props.checked ? <CheckIcon /> : null}
    </Container>
  );
});

const Container = styled(MenuItem)`

  && {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    direction: rtl;
    padding: 20px;
    width: 330px;
  }
`;

const Description = styled.div`
  display: flex;
  flex-direction: column;
`;

const Title = styled.div`
&&{
  font-size: 16px;
  font-weight: 500;
}
`;

const Subtitle = styled.div`
  font-size: 14px;
  margin-left: auto;
`;

const CheckIcon = styled(CheckRoundedIcon)`
  && {
    color: ${(props) => props.theme.header.background};
    margin-right: auto;
  }
`;

export default ClinicMenuItem;
