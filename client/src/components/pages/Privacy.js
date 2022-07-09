import React, { Component } from "react";

import "../../utilities.css";
import "./Privacy.css";
import TopBanner from "../modules/TopBanner.js";
import PrivacyBackground from "../../img/PrivacyBanner.png";

class Privacy extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    // remember -- api calls go here!
  }

  render() {
    return (
      <div className="App-container">
        <TopBanner 
          background={PrivacyBackground}
          // title="CHUN HEI SAMUEL LAM"
          title={(<span className="privacy-highlight"> PRIVACY </span>)}
          content={(<>We take your privacy seriously. We have spare no effort to
          ensure our webpage complies with the <i> General Data Protection 
            Regulation (GDPR)</i> set by the European Union. Please read the 
            following details on your right and responsibilities. Please email me
            for any complaints concerning your privacy. </>)}
          des="Charing Cross, London, UK."
        />
        <div className="u-block">
          <p> To be completed in Alpha testing.</p>
        </div>
      </div>
    );
  }
}

export default Privacy;