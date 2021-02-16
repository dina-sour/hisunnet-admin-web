import React from "react";
import styled from "styled-components";
import CheckIcon from "@material-ui/icons/Check";
import { MenuItem } from "@material-ui/core";

const ClinicMenuItem = (props) => {
  return (
    <Container>
      {props.isChecked ? <CheckIcon /> : null}
      <Description>
        <Title>
          {props.clinicName} - {props.location}
        </Title>
        <Subtitle>{props.address}</Subtitle>
      </Description>
    </Container>
  );
};

const Container = styled(MenuItem)`
  && {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    width: 298px;
    direction: rtl;
  }
`;

const Description = styled.div`
  display: flex;
  flex-direction: column;
`;

const Title = styled.div`
  font-size: 16px;
`;

const Subtitle = styled.div`
  font-size: 14px;
  font-weight: 200px;
`;

export default ClinicMenuItem;
