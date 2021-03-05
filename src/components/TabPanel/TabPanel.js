import React from 'react';
import Box from '@material-ui/core/Box';
import styled from 'styled-components';

const TabPanel = (props) => {
const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Container p={3}>
          {children}
        </Container>
      )}
    </div>
  );
};

const Container = styled(Box)`
&& {
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
}
`;

export default TabPanel;