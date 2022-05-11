import React, { useState } from "react";
import { Link } from "react-router-dom";
import {ReactComponent as WhiteLogo} from "../../img/Samuel_Lam_Logo_for_white.svg";
import NavBarDropdown from "./NavBarDropdown.js"

import "../../utilities.css";
import "./NavBar.css";

function NavBar () {

  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  const [dropdown2, setDropdown2] = useState(false);

  const closeMobileMenu = () => setClick(false);
  
  const onMouseEnter = () => {
    if (window.innerwidth < 1225) {setDropdown(false)} else {setDropdown(true)};
  };
  const onMouseEnter2 = () => {
    if (window.innerwidth < 1225) {setDropdown2(false)} else {setDropdown2(true)};
  };

  const onMouseLeave = () => {setDropdown(false)};
  const onMouseLeave2 = () => {setDropdown2(false)};

  return (
    <>
      <nav className="navbar-container">
          <div className="navbar-title u-inlineBlock">
            <Link to="/"> <WhiteLogo/> </Link>
          </div>
          
          {/* 
              Academic
                Research
                Teaching
                Imperial Wiki Initiative
              Religion
              Non-academic
              Curriculum
              Masterplan 2022
            */}

          <div className="navbar-menu-icon" onClick={() => setClick(!click)}>
            <i className={click ? "fas fa-times" : "fas fa-bars"}/>
          </div>

          <ul className={click ? "navbar-menu active" : "navbar-menu"}>
            <li className="navbar-item" onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}> 
              <Link to="/" className="navbar-links" >
                Academic <i className="fas fa-caret-down"/> </Link>
                {dropdown && <NavBarDropdown />}
                </li>
            <li className="navbar-item"> 
              <Link to="/christian" className="navbar-links" onClick={closeMobileMenu}>
                Religion</Link></li>
            <li className="navbar-item" onMouseEnter={onMouseEnter2} onMouseLeave={onMouseLeave2}> 
              <Link to="/eca" className="navbar-links">
                Non-Academic <i className="fas fa-caret-down"/> </Link>
                {dropdown2 && <NavBarDropdown />}
                </li>
            <li className="navbar-item"> 
              <Link to="/" className="navbar-links" onClick={closeMobileMenu}>
                Curriculum Vitae</Link></li>
            <li className="navbar-item"> 
              <Link to="/" className="navbar-links" onClick={closeMobileMenu}>
                Masterplan 2022</Link></li>
          </ul>
      </nav>
    </>
  );
}

export default NavBar;