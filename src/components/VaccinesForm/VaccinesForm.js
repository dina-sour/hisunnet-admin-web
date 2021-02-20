import React from "react";
import styled from "styled-components";
import {
  TextField,
  IconButton,
  Dialog,
  DialogTitle,
  DialogContent,
} from "@material-ui/core";
import { Controller, useForm, reset } from "react-hook-form";
import DateFnsUtils from "@date-io/date-fns";
import Modal from "react-modal";
import "date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from "@material-ui/pickers";
import CloseIcon from "@material-ui/icons/Close";

const VaccinesForm = (props) => {
  const { control, handleSubmit, reset } = useForm();
  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <Container>
        <Popup
          scroll="paper"
          open={props.formIsOpen}
          onClose={props.onCloseForm}
        >
          <DialogTop>
            <IconButton onClick={props.closeVaccineForm}>
              <CloseIcon />
            </IconButton>
          </DialogTop>
          <Title>פרטי עודפי חיסונים</Title>
        </Popup>
      </Container>
    </MuiPickersUtilsProvider>
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
    height: 658px;
    width: 1130px;
    padding: 20px;
  }
  &.MuiDialog-root	{
    background-color: transparent;
  }
`;

const DialogTop = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const Title = styled.div`
  color: #141414;
  font-family: Heebo;
  font-size: 16px;
  font-weight: 500;
  margin-left: auto;
`;

const InputField = styled(TextField)`
  width: 100%;
  height: 51px;
  direction: rtl;
  border: 1px solid #b9b9b9;
  font-size: 14px;
  & input {
    font-family: Heebo;
  }
  & fieldset {
    border-radius: 100px;
  }
  & label {
    color: #525558;
  }
`;

export default VaccinesForm;
