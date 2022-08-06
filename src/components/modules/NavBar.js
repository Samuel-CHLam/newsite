import React, { useState } from "react";
import { Link } from "react-router-dom";
import {ReactComponent as WhiteLogo} from "../../img/Samuel_Lam_Logo_for_black.svg";
import NavBarDropdown from "./NavBarDropdown.js";
import ResumePDF from "../../data/Resume/CV_2022_V1.pdf";

import "../../utilities.css";
import "./NavBar.css";

function NavBar () {

  const [click, setClick] = useState(false);
  const [dropdownTeaching, setDropdownTeaching] = useState(false);
  const [dropdownCV, setDropdownCV] = useState(false);

  const closeMobileMenu = () => setClick(false);
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };
  const collapseAfterClick = () => {
    closeMobileMenu();
    scrollToTop();
  }

  // Teaching page
  /* Trigger value - 1240px */
  const onMouseEnterTeaching = () => {
    if (window.innerwidth < 1240) {setDropdownTeaching(false)} else {setDropdownTeaching(true)};
  };

  const onMouseLeaveTeaching = () => {setDropdownTeaching(false)};

  const teachingSubpages = [
    {title: "Teaching Pages", localpath: true, path: "/teaching"},
    {title: "Resources", localpath: true, path: ""},
  ]

  // CV page
  const onMouseEnterCV = () => {
    if (window.innerwidth < 1240) {setDropdownCV(false)} else {setDropdownCV(true)};
  };

  const onMouseLeaveCV = () => {setDropdownCV(false)};

  const cvSubpages = [
    {title: "Curriculum Vitae (PDF)", localpath: false, path: ResumePDF},
    {title: "Writings", localpath: true, path: "/publication"},
    {title: "UG Programme", localpath: true, path: ""},
  ]

  return (
    <>
      <nav className="navbar-container">
          <div className="navbar-title u-inlineBlock">
            <Link to="/" onClick={scrollToTop}> <WhiteLogo/> </Link>
          </div>

          <div className="navbar-menu-icon" onClick={() => setClick(!click)}>
            <i className={click ? "fas fa-times" : "fas fa-bars"}/>
          </div>

          <ul className={click ? "navbar-menu active" : "navbar-menu"}>
            <li className="navbar-item" onClick={collapseAfterClick}> 
              <Link to="/research" className="navbar-links" >Research</Link>
            </li>

            <li className="navbar-item" onMouseEnter={onMouseEnterTeaching} onMouseLeave={onMouseLeaveTeaching}> 
              <Link to="/teaching" className="navbar-links" >Teaching <i className="fas fa-caret-down"/> </Link>
              {dropdownTeaching && <NavBarDropdown menuItems={teachingSubpages}/>}
            </li>

            <li className="navbar-item"> 
              <Link to="/christian" className="navbar-links" onClick={collapseAfterClick}>Religion</Link></li>

            <li className="navbar-item" onClick={collapseAfterClick}> 
              <Link to="/eca" className="navbar-links"> Non-Academic </Link>
            </li>

            <li className="navbar-item" onMouseEnter={onMouseEnterCV} onMouseLeave={onMouseLeaveCV}> 
              <Link to="/cv" className="navbar-links">
                Curriculum Vitae <i className="fas fa-caret-down"/> </Link>
                {dropdownCV && <NavBarDropdown menuItems={cvSubpages} />}
            </li>
            
            <li className="navbar-item"> 
              <a href="https://samuel-chlam.github.io/masterplan-2022/" className="navbar-links" onClick={collapseAfterClick}>
                Masterplan 2022</a></li>

            <li className="navbar-item">
              <a href="https://samuel-chlam.github.io/graduation/" className="navbar-links" onClick={collapseAfterClick}>
                Graduation Info</a></li>
          </ul>
      </nav>
    </>
  );
}

export default NavBar;