import React, { Component } from "react";
import { Link } from "@reach/router";
import Institutes from "./Institutes.js";

import "../../utilities.css";
import "./BottomBanner.css";
import fbIcon from "../../img/icon/facebookicon.png";
import githubIcon from "../../img/icon/githubicon.png";
import linkedinIcon from "../../img/icon/linkedinicon.png";
import emailIcon from "../../img/icon/emailicon.png";


class ContactItem extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="contact-item">
        <div className="contact-itemleft"> 
        <img src={this.props.src}/>
        </div>
        <div> {this.props.detail} </div>
      </div>
    )
  }
}



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
          <div className="bottombanner-leftmain">
            <div className="bottombanner-logo">
                {/* <div className="bottombanner-imperial"> </div>
                <div className="bottombanner-mit"> </div> */}
                <Institutes />
            </div>
            <div className="bottombanner-link">
                <Link to="/privacy">Privacy</Link> | <a href="https://accessibility.mit.edu/">Accessibility</a>
            </div>
          </div>
          <div className="bottombanner-description">
                The webpage is developed with the skeleton code provided by 
                the <a href="https://weblab.mit.edu/">MIT web.lab team</a>, and templates 
                by <a href="https://lochungtin.github.io/site/">Timothy Lo</a> and <a href="https://nhcheng.mit.edu/">Thomas Cheng</a>. 
                The source code for this webpage is available in my GitHub.
          </div>
        </div>
        <div className="bottombanner-right"> 
            {/* Email:
            <ul>
                <li> Imperial: chun.lam18@imperial.ac.uk </li>
                <li> MIT: chunhei@mit.edu </li>
                <li> Others: sammuelchlam@gmail.com </li>
            </ul> */}
            <div> 
              <ContactItem src={fbIcon} 
                detail={(<a href="https://www.facebook.com/chunhei.lam.1671/">Chun Hei Sammuel Lam</a>)}/>
              <ContactItem src={githubIcon} 
                detail={(<a href="https://github.com/Samuel-CHLam">Samuel-CHLam</a>)}/>
              <ContactItem src={linkedinIcon} 
                detail={(<> <a href="https://www.linkedin.com/in/ch-sammuel-6b446a190/">CH-Sammuel Lam</a> <span> (Inactive) </span> </>)}/>
              <ContactItem src={emailIcon} 
              detail={<>
                <div> <a href="mailto:chun.lam18@imperial.edu">chun.lam18@imperial.edu</a> (Imperial) </div>
                <div> <a href="mailto:chunhei@mit.edu">chunhei@mit.edu</a> (MIT) </div>
                <div> <a href="mailto:sammuelchlam@gmail.com">sammuelchlam@gmail.com</a> (Others) </div>
              </>}/>
            </div>
        </div>
      </div>
    );
  }
}

export default BottomBanner;