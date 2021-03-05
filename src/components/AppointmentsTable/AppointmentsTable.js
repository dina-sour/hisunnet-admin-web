import React, { useState } from "react";
import styled from "styled-components";
import { DataGrid } from "@material-ui/data-grid";
import appointmentsTableColumns from "./appointments-table-columns";

const AppointmentsTable = (props) => {
  const [selectionModel, setSelectionModel] = React.useState([]);

  return (
    <Container>
      <DataGrid
        onSelectionModelChange={(newSelection) => {
          setSelectionModel(newSelection.selectionModel);
          console.log(newSelection);
        }}
        selectionModel={selectionModel}
        rows={props.rows}
        columns={appointmentsTableColumns}
        pageSize={10}
        checkboxSelection
      />
    </Container>
  );
};

const Container = styled.div`
  && {
    width: 100%;
    direction: rtl;
    height: 650px;
  }
`;

/*
column = {field: fieldname, hadername: headername}
*/

export default AppointmentsTable;
