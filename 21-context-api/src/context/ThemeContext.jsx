import React, { createContext } from "react";

export const ThemeContext = createContext();

const ThemeProvider = (props) => {
  return (
    <ThemeContext.Provider value="rohit">
      {props.children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;