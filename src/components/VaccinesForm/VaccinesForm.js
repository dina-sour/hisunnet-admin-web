import React, { useState } from "react";
import styled from "styled-components";
import { Button, TextField, IconButton, Dialog } from "@material-ui/core";
import { Controller, useForm, useFieldArray } from "react-hook-form";
import CloseIcon from "@material-ui/icons/Close";
import AddCircleOutlineOutlinedIcon from "@material-ui/icons/AddCircleOutlineOutlined";
import { Autocomplete } from "@material-ui/lab";

const VaccinesForm = (props) => {
  const { control, handleSubmit, reset } = useForm();

  const getTimes = () => {
    let times = [],
      i,
      j;
    for (i = 0; i < 24; i++) {
      for (j = 0; j < 2; j++) {
        times.push(i + ":" + (j === 0 ? "00" : 30 * j));
      }
    }
    return times;
  };

  const hours = getTimes();

  const formField = (key, title, type) => {
    return (
      <Controller
        name={key}
        as={<InputField variant="outlined" label={title} type={type} />}
        control={control}
        defaultValue=""
        rules={{ required: true }}
      />
    );
  };

  const timeField = (key, title) => {
    return (
      <Controller
        render={(props) => (
          <TimeSelector
            options={hours}
            onChange={(_, data) => props.onChange(data)}
            renderInput={(params) => (
              <InputField
                {...params}
                label={title}
                placeholder={title}
                variant="outlined"
              />
            )}
          />
        )}
        name={key}
        control={control}
        defaultValue={null}
      />
    );
  };

  const { fields, append, remove } = useFieldArray({
    control,
    name: "hours",
  });

  return (
    <Container>
      <Popup scroll="paper" open={props.formIsOpen} onClose={props.onCloseForm}>
        <DialogTop>
          <IconButton onClick={props.closeVaccineForm}>
            <CloseIcon />
          </IconButton>
        </DialogTop>
        <Title>פרטי עודפי חיסונים</Title>
        <RemainingVaccines>
          {formField("remainingVaccines", "מספר חיסונים עודפים", "number")}
        </RemainingVaccines>
        <Divider />
        <ServiceHours>
          <Title>שעות קבלה</Title>
          <Subtitle>ניתן להזין טווח או להוסיף תורים ספציפיים</Subtitle>
          <FieldDescription>טווח שעות</FieldDescription>
          <TimeRange>
            {timeField("endTime", "עד שעה")}
            {timeField("startTime", "משעה")}
          </TimeRange>
          <FieldDescription>תורים לפי שעות ספציפיות</FieldDescription>
          <SpecificTimes>
            {fields.map((item, index) => {
              return (
                <div key={hours[index]}>
                  <Controller
                    render={(props) => (
                      <TimeSelector
                        options={hours}
                        onChange={(_, data) => props.onChange(data)}
                        renderInput={(params) => (
                          <InputField
                            {...params}
                            label="בשעה"
                            placeholder="בשעה"
                            variant="outlined"
                          />
                        )}
                      />
                    )}
                    name={`hours[${index}].value`}
                    control={control}
                    defaultValue={hours[0]}
                  />
                </div>
              );
            })}
            <AddTimeButton
              onClick={() => {
                append({
                  time: "newTime",
                });
              }}
              endIcon={<AddCircleOutlineOutlinedIcon />}
            >
              הוספת שעה
            </AddTimeButton>
          </SpecificTimes>
        </ServiceHours>
        <ButtonsGroup>
          <SubmitButton
            color="primary"
            variant="contained"
            onClick={handleSubmit((_) => props.onFormSubmit(_, remove))}
          >
            שמירה
          </SubmitButton>
          <ResetFormButton
            variant="contained"
            onClick={() => {
              remove();
              reset();
            }}
          >
            ניקוי טופס
          </ResetFormButton>
        </ButtonsGroup>
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
    height: 658px;
    width: 1130px;
    padding: 20px;
  }
  &.MuiDialog-root {
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

const Subtitle = styled.div`
  height: 21px;
  width: 240px;
  color: #525558;
  font-family: Heebo;
  font-size: 14px;
  letter-spacing: 0;
  line-height: 21px;
  margin-left: auto;
  margin-bottom: 20px;
`;

const FieldDescription = styled.div`
  color: #525558;
  font-family: Heebo;
  font-size: 16px;
`;

const RemainingVaccines = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  margin-bottom: 20px;
`;

const InputField = styled(TextField)`
  height: 50px;
  width: 344px;
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

const Divider = styled.div`
  height: 1px;
  width: 570px;
  align-self: center;
  background-color: #e9eaea;
  margin: 10px 0 10px 0;
`;

const ServiceHours = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  align-items: flex-end;
`;

const TimeRange = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 344px;
`;

const TimeSelector = styled(Autocomplete)`
  height: 50px;
  width: 162px;
  margin-bottom: 50px;
`;

const SpecificTimes = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
`;

const AddTimeButton = styled(Button)`
  && {
    justify-content: space-evenly;
    text-decoration: underline;
  }
  width: 140px;
`;

const ButtonsGroup = styled.div`
  display: flex;
  flex-direction: row;
  width: 360px;
  justify-content: space-between;
  margin-top: auto;
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
  }
  &:hover {
    background-color: ${(props) => props.theme.general.main};
  }
`;

const ResetFormButton = styled(Button)`
  && {
    color: ${(props) => props.theme.general.main};
    background-color: white;
    border: 1px solid ${(props) => props.theme.general.main};
    border-radius: 100px;
    height: 40px;
    width: 170px;
    font-family: Heebo;
    font-size: 14px;
  }
  &:hover {
    background-color: white;
  }
`;

export default VaccinesForm;
