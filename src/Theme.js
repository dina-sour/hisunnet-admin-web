import React, { useContext } from "react";
import { ThemeProvider, createGlobalStyle } from "styled-components";
import { ThemeContext } from "./contexts/ThemeStore";

const themes = {
  maccabi: {
    header: {
      background: "#0D47A1",
    },
    clinicIcon:
      "https://projects.invisionapp.com/assets/21004701/968353254/FCDE12868D1A689F3BBA19573FD8A5470B2F4DD0CAAD267D8714A6862E6C0270/download?cacheVersion=6",
    login: {
      loginButtonColor: "#0D47A1",
    },
    general: {
      main: "#0D47A1",
      lightBackground: "#F7F9FC"
    },
  }
};

const GlobalStyle = createGlobalStyle`
  * {
      font-family: Heebo, 'Arial Narrow Bold', sans-serif;
      transition: all 0.5s;
  }
`;

const Theme = ({ children }) => {
  const { theme } = useContext(ThemeContext);
  return (
    <ThemeProvider theme={themes[theme]}>
      <GlobalStyle />
      {children}
    </ThemeProvider>
  );
};

export default Theme;
