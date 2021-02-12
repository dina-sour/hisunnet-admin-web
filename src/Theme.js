import React, { useContext } from "react";
import { ThemeProvider, createGlobalStyle } from "styled-components";
import { ThemeContext } from "./contexts/ThemeStore";

const themes = {
  maccabi: {
    header: {
      background: "#0D47A1",
    },
  },
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
