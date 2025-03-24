import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import "../styles/App.css";

const DarkModeToggle = () => {
  const { darkMode, toggleDarkMode } = useContext(ThemeContext);

  return (
    <label className="switch">
      <input type="checkbox" checked={darkMode} onChange={toggleDarkMode} />
      <span className="slider round"></span>
    </label>
  );
};

export default DarkModeToggle;