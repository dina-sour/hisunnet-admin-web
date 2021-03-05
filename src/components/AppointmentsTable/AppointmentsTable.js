import React, { useState } from "react";
import styled from "styled-components";
import { DataGrid } from "@material-ui/data-grid";
import appointmentsTableColumns from "./appointments-table-columns";

const AppointmentsTable = (props) => {
  return (
    <Container>
      <Table
        onSelectionModelChange={(newSelection) => {
          props.onSelectAttendees(newSelection);
        }}
        selectionModel={props.selectedRows}
        rows={props.rows}
        columns={appointmentsTableColumns}
        pageSize={10}
        checkboxSelection
      />
    </Container>
  );
};

const Container = styled.div`
    direction: rtl;
    height: 650px;
    width: 100%;
`;

const Table = styled(DataGrid)`
  && {
    overflow-x: hidden;
  }
`;

/*
column = {field: fieldname, hadername: headername}
*/

export default AppointmentsTable;
