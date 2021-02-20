import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import Header from "../../components/Header/Header";
import { Button, Menu, MenuItem } from "@material-ui/core";
import firebase from "firebase";
import { useHistory } from "react-router-dom";
import { v4 as uuidv4 } from 'uuid';
import ClinicMenuItem from "../../components/ClinicMenuItem/ClinicMenuItem";

const ClinicsPage = (props) => {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [area, setArea] = useState("תל אביב");
  const [clinics, setClinics] = useState([{name: 'היכל שלמה', location: 'אייזק רמבה 7', address:'היי שלופ אני כתובת'}, 
  {name: '2היכל שלמה', location: '2אייזק רמבה 7', address:"היי שלום אני כתובת2"}]);
  const [selectedClinic, setSelectedClinic] = useState();

  const getEmail = () => {
    if (props.loggedIn) {
      let email = firebase.auth().currentUser.email;
      setEmail(email);
    }
  };

  useEffect(() => {
      getEmail();
  });

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClinicsMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const getAllClinics = () => {

  };

  const onClinicCheck = (clinicName) => {
    console.log(clinicName);
    console.log(selectedClinic);
    setSelectedClinic(clinicName);
  };

  return (
    <Container>
      <Header
        userName={email}
        area={area}
        handleLogout={props.handleLogout}
        isMenuOpen={Boolean(anchorEl)}
        handleClinicsMenu={handleClinicsMenu}
      />
      <ClinicsMenu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
        keepMounted
      >
        {
          clinics.map(clinic => {
            return <ClinicMenuItem
            onClinicCheck={() => onClinicCheck(clinic.name)}
            clinicName={clinic.name}
            key={clinic.name}
            location={clinic.location}
            address={clinic.address}
            checked={clinic.name===selectedClinic}
          />
          })
        }
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
    margin-top: 70px;
  }
`;

export default ClinicsPage;
