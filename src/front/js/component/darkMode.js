import { Home } from "@material-ui/icons";
import React from "react";
import { createContext, useState } from "react";
import ReactSwitch from "react-switch";

export const ThemeContext = React.createContext(false);

function Dark() {
  const [theme, setTheme] = useState("dark");

  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
  };
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className="App" id={theme}>
        <ReactSwitch onChange={toggleTheme} checked={theme === "dark"} />
        <Home />
      </div>
    </ThemeContext.Provider>
  );
}
export default Dark;
