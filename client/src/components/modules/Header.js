import React, { Component } from "react";
import Institutes from "./Institutes.js";

import "../../utilities.css";
import "./Header.css";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    // remember -- api calls go here!
  }

  render() {
    return (
      <header className="Header-container">
          <h1 className="Header-left"> ChunHei Samuel Lam </h1>
          <div className="Header-right"> <Institutes /> </div>
      </header>
    );
  }
}

export default Header;