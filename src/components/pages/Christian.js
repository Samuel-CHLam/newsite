import React, { Component } from "react";

import "../../utilities.css";
import "./Christian.css";
import TopBanner from "../modules/TopBanner.js";
import ChristianBackground from  "../../img/ReligionBanner.png";

import Phil01 from "../../data/Christian/Phil01.pdf"
import Phil08 from "../../data/Christian/Phil08.pdf"
import Psalm from "../../data/Christian/Psalm_126.pdf"

class Christian extends Component {
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
          background={ChristianBackground}
          title={(<> THE NEW <span className="Christian-highlight"> LIFE </span></>)}
          content="I am a Christian and I believe our faith changes lives and creates impact in society. I have engages in various churches
          and Christian Unions."
          des={<>Image: My baptism at <i>Oi 
            Kwan Road Baptist Church</i> on the 1st April, 2018. Credit to the members of choir.</>}
        />
      <div className="u-block">
          <h1> What do we believe? </h1>
          <p> We believe in God - the Father (Jehovah), the Son (Jesus), and the Spirit, three in one.
            We believe that we are sinful in nature but saved and justified by Jesus' salvation and resurrection.
            We believe that our lives are transformed as we acknowledge God as our savior. See the <a href="https://www.uccf.org.uk/about/doctrinal-basis">UCCF Doctrinal Basis</a> for more information.</p>
          <p className="u-margin-top"> I am particularly interested in studying the following topics: </p>
          <ul>
            <li>How christians respond to social instability?</li>
            <li>Christian Music</li>
            <li>Church Development</li>
          </ul>
          <h1> Christian-related engagements </h1>
          <p className="u-nomargin"> I am currently a member of: </p>
          <ul>
            <li>Home church: Oi Kwan Road Baptist Church (OKBC)</li>
            <li>London home church: Cantonese Congregation, Chinese Churches in London (CCiL)</li>
            <li>Imperial College Christian Union (ICCU)</li>
          </ul>
          <p>In addition, I regularly attend the St. Ebbe's Church, Oxford.</p>
          <h2>Service in christian community</h2>
          <p className="u-nomargin"> I have been serving in the following committees: </p>
          <ul>
            <li><b>Vice-Chair</b>, committee of Cantonese Youth Fellowship (CYF), CCiL (2021 July - 2022 June)</li>
            <li><b>Secretary</b>, committee of Cantonese Youth Fellowship (CYF), CCiL (2019 July - 2020 June)</li>
            <li>I served as a <b>secretary</b> in numerous committees for summer camps in OKBC</li>
          </ul>
          <p>In addition to the above administrative works, I regularly serve as a pianist in numerous worship teams. I am also a chorist (volunteer) in the chapel of University College and numerous festival choirs in churches.</p>
        </div>
        <div className="u-block">
          <h1> Notes </h1>
            <h3>Notes on Philippians</h3>
              <p>These are supplementary notes written for my own bible study group at Imperial College Christian Union (ICCU). They are based 
                on the <a href="https://www.uccf.org.uk/impact">resources</a> by the Universities and Colleges Christian Fellowship (UCCF), 
                yet the notes are not endorsed by them.</p>
                <ul>
                  <li>Circumcision and Valuables (Chapter 3a). <a href={Phil08}>Slides</a></li>
                  <li>Introduction <a href={Phil01}>Slides</a></li>
                </ul>
            <h3>Miscellaneous Notes</h3>
              <ul>
                <li>Short Notes on Psalm 126 (Prayer Breakfast Discussion). <a href={Psalm}>Notes</a></li>
              </ul>
        </div>
      </div>
    );
  }
}

export default Christian;
