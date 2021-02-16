import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import Header from "../../components/Header/Header";
import { Button, Menu, MenuItem } from "@material-ui/core";
import firebase from "firebase";
import { useHistory } from "react-router-dom";
import ClinicMenuItem from "../../components/ClinicMenuItem/ClinicMenuItem";

const ClinicsPage = (props) => {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [selectedClinic, setSelectedClinic] = useState();

  const getEmail = () => {
    if (props.loggedIn) {
      let email = firebase.auth().currentUser.email;
      setEmail(email);
    }
  };

  const mounted = useRef();
  useEffect(() => {
    if (!mounted.current) {
      getEmail();
      mounted.current = true;
    } else {
      getEmail();
    }
  });

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClinicsMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Container>
      <Header
        userName={email}
        area="תל אביב"
        handleLogout={props.handleLogout}
        isMenuOpen={Boolean(anchorEl)}
        handleClinicsMenu={handleClinicsMenu}
      />
      <ClinicsMenu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
        keepMounted
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
      >
        <ClinicMenuItem
          clinicName= "מרפאה לחיסוני קורונה"
          location= "היכל שלמה"
          address="אייזק רמבה 7, תל אביב"
          isChecked={false}
        />
      </ClinicsMenu>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

const ClinicsMenu = styled(Menu)`
  && {
    width: 357px;
    margin-top: 25px;
  }
`;

export default ClinicsPage;
