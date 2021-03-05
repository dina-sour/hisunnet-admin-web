import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Header from "../../components/Header/Header";
import { Menu, Tabs, Tab,AppBar} from "@material-ui/core";
import firebase from "firebase";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";
import { Collapse } from "react-collapse";
import ClinicMenuItem from "../../components/ClinicMenuItem/ClinicMenuItem";
import VaccinesTab from "../../components/VaccinesTab/VaccinesTab";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import VaccinesForm from "../../components/VaccinesForm/VaccinesForm";
import { v4 as uuid } from "uuid";
import TabPanel from '../../components/TabPanel/TabPanel';
import AppointmentsTable from '../../components/AppointmentsTable/AppointmentsTable';

const ClinicsPage = (props) => {
  const [email, setEmail] = useState("");
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
  const [isVaccinesFormOpen, setIsVaccinesFormOpen] = useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [vaccines, setVaccines] = useState([]);
  const [tabIndex, setTabIndex] = React.useState(0);

  const changeTabIndex = (event, newValue) => {
    setTabIndex(newValue);
  };

  const getEmail = () => {
    if (props.loggedIn) {
      let email = firebase.auth().currentUser.email;
      setEmail(email);
    }
  };

  useEffect(() => {
    getEmail();
  });

  const handleClinicsMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const getAllClinics = () => {
    //TODO: call api to get all clinics, with the area id
  };

  const getSelectedClinicDetails = () => {
    console.log("hello");
    //TODO: call api with clinic id for details of vaccines
  };

  const onClinicCheck = (clinicName) => {
    setSelectedClinic(clinicName);
  };

  const toggleVaccineTab = () => {
    let isVaccinesTabOpen = vaccineTabsOpen;
    setVaccineTabsOpen(!isVaccinesTabOpen);
  };

  const onFormSubmit = (data, clearForm, form) => {
    if (data.hours === null) {
      data.hours = [];
    }
    let newVaccine = {
      ...data,
      id: uuid(),
      form,
    };
    let updatedVaccines = [...vaccines];
    updatedVaccines.unshift(newVaccine);
    setIsVaccinesFormOpen(false);
    setVaccines(updatedVaccines);
    clearForm();
  };

  const onDeleteVaccines = (id) => {
    let updatedVaccines = [...vaccines];
    let index = updatedVaccines.findIndex((vaccine) => {
      return vaccine.id === id;
    });
    if (index !== -1) updatedVaccines.splice(index, 1);
    setVaccines(updatedVaccines);
  };

  const onVaccineEdit = (vaccine) => {
    let index = vaccines.map((vac) => vac.id).indexOf(vaccine.id);
    let newVaccines = [...vaccines];
    newVaccines.splice(index, 1, vaccine);
    setVaccines(newVaccines);
  };

  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }

  const exampleRows = [
    { id: '0', appointmentTime: '16:30', fullName: 'דינה מטבייב', idNumber: '123456789', phoneNumber: '0521234567' },
    { id: '1', appointmentTime: '16:30', fullName: '2דינה מטבייב', idNumber: '123456789', phoneNumber: '0521234567' },
    { id: '3', appointmentTime: '16:30', fullName: '3דינה מטבייב', idNumber: '123456789', phoneNumber: '0521234567' },

  ]

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
      <VaccineTabsTopBar onClick={toggleVaccineTab}>
        {vaccineTabsOpen ? <ExpandLessIcon size="large" /> : <ExpandMoreIcon />}
        <VaccineTabsTitle>מקבצי חיסונים</VaccineTabsTitle>
      </VaccineTabsTopBar>
      <Collapse isOpened={vaccineTabsOpen}>
          <VaccineTabs>
            <AddVaccinesButton onClick={() => setIsVaccinesFormOpen(true)}>
              <AddVaccinesIcon />
              <AddVaccinesTitle>הוספת מקבץ חיסונים</AddVaccinesTitle>
            </AddVaccinesButton>
            {vaccines.map((vaccine) => {
              return (
                <VaccinesTab
                  remainingVaccines={vaccine.remainingVaccines}
                  endTime={vaccine.endTime}
                  startTime={vaccine.startTime}
                  appointments={vaccine.appointments}
                  id={vaccine.id}
                  vaccine={vaccine}
                  hours={vaccine.hours}
                  onDeleteVaccines={() => onDeleteVaccines(vaccine.id)}
                  key={vaccine.id}
                  onVaccineEdit={onVaccineEdit}
                />
              );
            })}
          </VaccineTabs>
      </Collapse>
      <VaccinesForm
        onFormSubmit={onFormSubmit}
        closeVaccineForm={() => setIsVaccinesFormOpen(false)}
        formIsOpen={isVaccinesFormOpen}
      />
      <div>
      <AppBar position="static">
        <Tabs value={tabIndex} onChange={changeTabIndex}>
          <Tab label="Item One" {...a11yProps(0)} />
          <Tab label="Item Two" {...a11yProps(1)} />
          <Tab label="Item Three" {...a11yProps(2)} />
        </Tabs>
      </AppBar>
      <TabPanel value={tabIndex} index={0}>
        <AppointmentsTable rows={exampleRows}/>
      </TabPanel>
      <TabPanel value={tabIndex} index={1}>
        Item Two
      </TabPanel>
      <TabPanel value={tabIndex} index={2}>
        Item Three
      </TabPanel>
    </div>
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

const VaccineTabs = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  padding: 5px 40px 10px 20px;
  background-color: ${(props) => props.theme.general.lightBackground};
  overflow-x: auto;
`;

const VaccineTabsTopBar = styled.div`
  color: ${(props) => props.theme.header.background};
  display: flex;
  height: 70px;
  flex-direction: row;
  box-shadow: 0 10px 18px rgba(0, 0, 0, 0.15);
  background-color: ${(props) => props.theme.general.lightBackground};
  align-items: center;
  padding: 0 40px 0 20px;
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

const AddVaccinesButton = styled.div`
  display: flex;
  height: 201px;
  width: 344px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #c3d1e2;
  border: 1px dashed lightgray;
  border-radius: 20px;
  &:hover {
    background-color: #ece7e7;
    cursor: pointer;
  }
`;

const AddVaccinesTitle = styled.div`
  font-size: 16px;
  font-weight: 500;
  color: #525558;
`;

const AddVaccinesIcon = styled(AddCircleOutlineIcon)`
  && {
    height: 36px;
    width: 36px;
  }
`;

export default ClinicsPage;
