import React, { useState } from "react";
import config from '../configs/app-config.json';

const ThemeContext = React.createContext();

const ThemeStore = ({ children }) => {
  const [theme, setTheme] = useState(config.CLINIC);

  const switchTheme = (theme) => setTheme(theme);

  return (
    <ThemeContext.Provider value={{ switchTheme, theme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export { ThemeStore, ThemeContext };