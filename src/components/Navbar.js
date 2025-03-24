import React from "react";
import DarkModeToggle from "./DarkModeToggle";
import "../styles/App.css";



const Navbar = () => {
  return (
    <nav className="navbar">
      <div className = "nav-header">
        <div className="navtitle">
          <h1 className="title">Analysis of Maximal Clique Algorithms</h1>
        </div>
        <div className="toggle-container">
          <DarkModeToggle />
        </div>
      </div>
      <div className="nav-links">
        <a href="#execution-timesWiki-Vote">Execution Times</a>
        <a href="#analysis-datasetWiki-Vote">Analysis of Dataset</a>
      </div>
      
    </nav>
  );
};

export default Navbar;
