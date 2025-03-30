import React, { useState } from "react";
import DarkModeToggle from "./DarkModeToggle";
import "../styles/Navbar.css";
import "../App.css"
import favicon1 from "../assets/favicon1.png";
const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <nav className="navbar" >
      <div className = "nav-header">
        <div className="App-logo">
        <a href="#Intro"><img src={favicon1} width="70px" height="70px" id="image"/></a>
        </div>
        <div className="navtitle">
          <h1 className="title"><a href="#Intro">Analysis of Maximal Clique Algorithms</a></h1>
        </div>
        <div className="toggle-container">
          <DarkModeToggle />
        </div>

        <button className="menu-btn" onClick={() => setMenuOpen(!menuOpen)}>
          ☰
        </button>
      </div>
      <div className={`nav-links ${menuOpen ? "open" : ""}`}>
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
