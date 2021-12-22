import React, { Component } from "react";

import "../../utilities.css";
import "./Christian.css";
import TopBanner from "../modules/TopBanner.js";
import ChristianBackground from  "../../img/ReligionBanner.png";
import MyAlert from "../modules/MyAlert.js";

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
          content="I am a Christian and I enjoy exploring how our belief in God's
          salvation changes lives and creates impact in society. I have engages in various churches
          and Christian Unions."
          des={<> Taken in 2018 April when I baptised at my home church - <i> Oi 
            Kwan Road Baptist Church</i>. Credit to the members of choir.</>}
        />
      <div className="u-block">
          <h2> So what do we believe? </h2>
          <p> We believe in God - the Father (Jehovah), the Son (Jesus), and the Spirit, three in one.
            We believe that we are sinful in nature but saved and justified by Jesus' salvation and resurrection.
            We believe that our lives are transformed as we acknowledge God as our savior. </p>
          <MyAlert 
          alerttype="yellow"
          content=
          {(<> <p> Just as Moses lifted up the snake in the wilderness, so the Son of Man must be lifted up,
            that everyone who believes may have eternal life in him. For God so loved the world that he gave his 
            one and only Son, that whoever believes in him shall not perish but have eternal life. For God did not 
            send his Son into the world to condemn the world, but to save the world through him. (Gospel of John, 3:16, Bible) </p>
            <p className="u-nomargin"> Therefore, if anyone is in Christ, the new creation has come: The old has gone, the new is here! 
            (2 Corinthians, 5:17)</p>
            </>)}/>
          <p className="u-margin-top"> I am particularly interested in the following topics: </p>
          <ul>
            <li>How christians respond to social instability?</li>
            <li>Christian Music</li>
            <li>Church Development</li>
          </ul>
          <h2> Engagements </h2>
          <p className="u-nomargin"> I am engaging in: </p>
          <ul>
            <li>Oi Kwan Road Baptist Church (Member)</li>
            <li>EFCC Jachin Church</li>
            <li>Cantonese Congregation, WMC, Chinese Churches in London</li>
            <li>Imperial College Christian Union (ICCU)</li>
            <li>Massachusetts Institute of Technology Christian Union (MIT Cru)</li>
          </ul>
        </div>
        <div className="u-block">
          <h2> Notes </h2>
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
