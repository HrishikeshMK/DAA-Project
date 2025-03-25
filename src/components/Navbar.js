import React from "react";
import DarkModeToggle from "./DarkModeToggle";
import "../styles/Navbar.css";



const Navbar = () => {
  return (
    <nav className="navbar" >
      <div className = "nav-header">
        <div className="navtitle">
          <h1 className="title">Analysis of Maximal Clique Algorithms</h1>
        </div>
        <div className="toggle-container">
          <DarkModeToggle />
        </div>
      </div>
      <div className="nav-links">
        <a href="#">Algorithms</a>
        <a href="#Exec-times">Execution Times</a>
        <a href="#Cliq-dist">Clique Distribution</a>
        <a href="#other-statistics">Other statistics</a>
        <a href="#Members">Contributors</a>
      </div>
      
    </nav>
  );
};

export default Navbar;
