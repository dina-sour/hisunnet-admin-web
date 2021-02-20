import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Header from "../../components/Header/Header";
import { IconButton, Menu } from "@material-ui/core";
import firebase from "firebase";
import { useHistory } from "react-router-dom";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";
import { Collapse } from "react-collapse";
import ClinicMenuItem from "../../components/ClinicMenuItem/ClinicMenuItem";

const ClinicsPage = (props) => {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [area, setArea] = useState("תל אביב");
  const [vaccineTabsOpen, setVaccineTabsOpen] = useState(false);
  const [clinics, setClinics] = useState([
    {
      name: "היכל שלמה",
      location: "אייזק רמבה 7",
      address: "היי שלופ אני כתובת",
    },
    {
      name: "2היכל שלמה",
      location: "2אייזק רמבה 7",
      address: "היי שלום אני כתובת2",
    },
  ]);
  const [selectedClinic, setSelectedClinic] = useState(clinics[0].name);

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

  const getAllClinics = () => {};

  const getSelectedClinicDetails = () => {
    console.log("hello");
  };

  const onClinicCheck = (clinicName) => {
    console.log(clinicName);
    console.log(selectedClinic);
    setSelectedClinic(clinicName);
  };

  const toggleVaccineTab = () => {
    let isVaccinesTabOpen = vaccineTabsOpen;
    setVaccineTabsOpen(!isVaccinesTabOpen);
  }

  return (
    <Container>
      <Header
        userName={email}
        handleLogout={props.handleLogout}
        isMenuOpen={Boolean(anchorEl)}
        handleClinicsMenu={handleClinicsMenu}
        selectedClinic={clinics.find(
          (clinic) => clinic.name === selectedClinic
        )}
      />
      <ClinicsMenu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
        keepMounted
      >
        {clinics.map((clinic) => {
          return (
            <ClinicMenuItem
              onClinicCheck={() => onClinicCheck(clinic.name)}
              clinicName={clinic.name}
              key={clinic.name}
              location={clinic.location}
              address={clinic.address}
              checked={clinic.name === selectedClinic}
            />
          );
        })}
      </ClinicsMenu>
      <VaccineTabsTopBar  onClick={toggleVaccineTab}>
        {
          vaccineTabsOpen
          ? <ExpandLessIcon size='large'/>
          : <ExpandMoreIcon />
        }
      <VaccineTabsTitle>
        מקבצי חיסונים
      </VaccineTabsTitle>
      </VaccineTabsTopBar>
      <Collapse isOpened={vaccineTabsOpen}>
        <VaccineTabs />
        <div>HI</div>
      </Collapse>
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

const VaccineTabs = styled.div``;

const VaccineTabsTopBar = styled.div`
    color: ${(props) => props.theme.header.background};
    display: flex;
    height: 70px;
    flex-direction: row;
    background-color: ${(props) => props.theme.general.lightBackground};
    align-items: center;
    padding: 0 20px 0 20px;
    &:hover {
      cursor: pointer;
    }
`;

const VaccineTabsTitle = styled.div`
  margin-left: auto;
  align-self: center;
  font-size: 18px;
  font-weight: 500;
  letter-spacing: 0;
  line-height: 27px;
`;

const CollapseButton = styled(IconButton)`
  && {
    color: ${(props) => props.theme.general.main};
    margin-left: 25px;
  }
`;

export default ClinicsPage;
