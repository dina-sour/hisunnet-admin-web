import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Dialog, IconButton, TextField, Button } from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import { Autocomplete } from "@material-ui/lab";
import api from "../../api";

const LocationSelectionForm = (props) => {
  let [councils, setCouncils] = useState([]);
  let [inputValue, setInputValue] = useState("");
  let [selectedLocation, setSelectedLocation] = useState("");

  useEffect(async () => {
    try {
      const response = await api.get("/councils/councilsList");
      console.log(response);
      let councilsList = response.data;
      setCouncils(councilsList);
    } catch (err) {
      console.log(err);
    }
  }, []);

  const submitLocation = () => {
      localStorage.setItem("location", selectedLocation._id);
      props.closeForm();
  }

  return (
    <Container>
      <Popup scroll="paper" open={props.locationSelectionIsOpen}>
        <DialogTop>
          <IconButton onClick={props.closeForm}>
            <CloseIcon />
          </IconButton>
        </DialogTop>
        <Title>בחר את מיקומך</Title>
        <Autocomplete
          value={selectedLocation}
          onChange={(event, newValue) => {
            setSelectedLocation(newValue);
          }}
          inputValue={inputValue}
          onInputChange={(event, newInputValue) => {
            setInputValue(newInputValue);
          }}
          id="location-selector"
          options={councils}
          getOptionLabel={(option) => option.name}
          renderInput={(params) => (
            <InputField {...params} label="מיקום" variant="outlined" />
          )}
        />
        <SubmitButton
          color="primary"
          variant="contained"
          onClick={submitLocation}
        >
          שמירה
        </SubmitButton>
      </Popup>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Popup = styled(Dialog)`
  && {
    box-shadow: 0 0 4px rgba(0, 0, 0, 0.15);
    background-color: white;
    border: none;
    margin: auto;
  }
  & .MuiDialog-container {
    background-color: transparent;
  }
  & .MuiDialog-paper {
    height: 400px;
    width: 1000px;
    padding: 20px;
  }
  &.MuiDialog-root {
    background-color: transparent;
  }
`;

const Title = styled.h1`
  align-self: center;
  color: #2d2e2e;
`;

const DialogTop = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const InputField = styled(TextField)`
  height: 50px;
  width: 300px;
  direction: rtl;
  border: 1px solid #b9b9b9;
  font-size: 14px;
  && {
    margin-top: 20px;
  }
  & input {
    font-family: Heebo;
    color: #9a9a9a;
  }
  & fieldset {
    border-radius: 100px;
  }
  & label {
    color: #525558;
  }
`;

const SubmitButton = styled(Button)`
  && {
    background-color: ${(props) => props.theme.general.main};
    color: white;
    border-radius: 100px;
    height: 40px;
    width: 170px;
    font-family: Heebo;
    font-size: 14px;
    margin-top: auto;
    align-self: center;
  }
  &:hover {
    background-color: ${(props) => props.theme.general.main};
  }
`;

export default LocationSelectionForm;
