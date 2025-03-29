import React from "react";
import DarkModeToggle from "./DarkModeToggle";
import "../styles/Navbar.css";
import favicon1 from "../assets/favicon1.png";
const Navbar = () => {
  return (
    <nav className="navbar" >
      <div className = "nav-header">
        <a href="#Intro"><img src={favicon1} width="50px" height="50px" /></a>
        <div className="navtitle">
          <h1 className="title"><a href="#Intro">Analysis of Maximal Clique Algorithms</a></h1>
        </div>
        <div className="toggle-container">
          <DarkModeToggle />
        </div>
      </div>
      <div className="nav-links">
        <a href="#Algorithms">Algorithms</a>
        <a href="#Datasets">Datasets</a>
        <a href="#Exec-times">Execution Times</a>
        <a href="#Cliq-dist">Clique Distribution</a>
        <a href="#other-statistics">Other statistics</a>
        <a href="#Members">Contributors</a>
      </div>
      
    </nav>
  );
};

export default Navbar;
