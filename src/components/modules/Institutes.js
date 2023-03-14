import React, { Component } from "react";

import "../../utilities.css";
import "./Institutes.css";
import Oxford from "../../img/logo/institutes/ox_brand_cmyk_pos_rect.svg"
import Imperial from "../../img/logo/institutes/IMP_ML_1CS_4CP.png"
import Univ from "../../img/logo/institutes/univ_badge.png"
import cdt from "../../img/logo/institutes/cdtrandomsystemslogo.jpg"

class Institutes extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    // remember -- api calls go here!
  }

  render() {
    return (
      <div className="institutes-container">
        <a href="https://www.maths.ox.ac.uk" className="institute"><img height={40} src={Oxford} alt="Oxford logo"/></a>
        <a href="https://www.univ.ox.ac.uk" className="institute"><img height={40} src={Univ} alt="University College logo"/></a>
        <a href="https://www.imperial.ac.uk/" className="institute"><img height={40} src={Imperial} alt="Imperial logo"/></a>
        <a href="https://www.randomsystems-cdt.ac.uk" className="institute"><img height={40} src={cdt} alt="CDT logo"/></a>
      </div>
    );
  }
}

export default Institutes;