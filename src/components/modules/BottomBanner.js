import React, { Component } from "react";
import { Link } from "@reach/router";
import Institutes from "./Institutes.js";

import "../../utilities.css";
import "./BottomBanner.css";
import fbIcon from "../../img/icon/facebookicon.png";
import githubIcon from "../../img/icon/githubicon.png";
import linkedinIcon from "../../img/icon/linkedinicon.png";

class BottomBanner extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    // remember -- api calls go here!
  }

  render() {
    return (
      <div className="bottombanner-container">
        <div className="bottombanner-left">
          <Institutes />
          <div className="bottombanner-link">
            <div> <Link to="/privacy">Privacy</Link> | <a href="https://www.ox.ac.uk/accessibility">Accessibility</a></div>
            <div> <a href="https://github.com/Samuel-CHLam/newsite">About the website</a> </div>
          </div>
        </div>
        <div className="bottombanner-right"> 
          <div className="bottombanner-contactcontainer">
            <a className="bottombanner-contact" href="https://www.facebook.com/chunhei.lam.1671/"> <img src={fbIcon} alt="Facebook icon"/> </a>
            <a className="bottombanner-contact" href="https://github.com/Samuel-CHLam"> <img src={githubIcon} alt="GitHub icon"/> </a>
            <a className="bottombanner-contact" href="https://www.linkedin.com/in/ch-sammuel-6b446a190/"> <img src={linkedinIcon} alt="LinkedIn icon"/> </a>
          </div>
          <div className="bottombanner-email">
            <b>Emails:</b>
            <ul className="u-nomargin">
              <li><a href="mailto:samuel.lam@maths.ox.ac.uk">samuel.lam@maths.ox.ac.uk</a> (Academic)</li> 
              <li><a href="mailto:chun.lam@univ.ox.ac.uk">chun.lam@univ.ox.ac.uk</a> (College)</li> 
              <li><a href="mailto:chun.lam18@imperial.ac.uk">chun.lam18@imperial.ac.uk</a> (Imperial)</li> 
              <li><a href="mailto:sammuelchlam@gmail.com">sammuelchlam@gmail.com</a> (Non-academic)</li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default BottomBanner;