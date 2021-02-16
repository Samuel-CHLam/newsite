import React, { Component } from "react";
import { Router, Link } from "@reach/router";
// import MyGoogle from "./MyGoogle.js";

import "../../utilities.css";
import "./NavBar.css";

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    // remember -- api calls go here!
  }

  render() {
    return (
      <>
        <nav className="NavBar-container">
            <div className="NavBar-title u-inlineBlock">
                <Link to="/newsite" className="NavBar-link">
                    Home
                </Link>
                {/* <Link to="/mystory" className="NavBar-link">
                    My Story
                </Link> */}
                <Link to="/newsite/teaching" className="NavBar-link">
                    Teaching
                </Link>
                <Link to="/newsite/research" className="NavBar-link">
                    Research
                </Link>
                <Link to="/newsite/christianity" className="NavBar-link">
                    Religion
                </Link>
                <Link to="/newsite/eca" className="NavBar-link">
                    ECA
                </Link>
            </div>
            <div className="NavBar-linkContainer u-inlineBlock">
              <Link to="/newsite/cv" className="NavBar-link">
                  Curriculum Vitae
              </Link>
              <Link to="/newsite/publication" className="NavBar-link">
                  Publication
              </Link>
            {/* <MyGoogle handleLogin={this.props.handleLogin}
            handleLogout={this.props.handleLogout}
            userId={this.props.userId} /> */}
            </div>
        </nav>
      </>
    );
  }
}

export default NavBar;