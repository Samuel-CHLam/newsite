import React, { Component } from "react";

import "../../utilities.css";
import "./ECA.css";
import TopBanner from "../modules/TopBanner.js";
import Image from "../modules/Image.js"
// import ImageFlex from "../modules/ImageFlex.js"

import ECABackground from "../../img/ECABanner.png";
import eventinder from "../../img/eventinder.PNG";
import myself from "../../img/myself.PNG";
import mathsoc from "../../img/rcsu_maths.PNG";
import railsoc from "../../img/scc_railway.PNG";
import cambodia from "../../img/cambodia.jpg";

class ECA extends Component {
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
          background={ECABackground}
          // title="CHUN HEI SAMUEL LAM"
          title={<> <span className="ECA-highlight"> Extra-curricular </span> Engagements </>}
          content="Here is a summary of extra-curricular activites I have 
          participated for the last few years"
          des={<>Image: Taken in 2018 during a rehearsal of <i> Imperial College 
            DramSoc</i> production of drama <i> And Then There Were None</i>.
            I was a Deputy Stage Manager in that production. Credit to Daniel Lo.</>}
        />
        
        {/* Webpage development */}
        <div className="u-block"> 
          <h1>Webpage Development</h1> 
          <p>I am currently a webmaster of a couple of student societies. Huge shout-out to the <a href="https://weblab.mit.edu/">MIT Web.lab team</a> for their insightful 
              crash course in MERN framework.</p>
        </div>
        <div className="u-block ECA-webpagefig">
          <div className="ECA-figleft">
            <Image 
              src={mathsoc}
              des="Imperial Mathsoc: the deparmental society representing more than 700 undergraduates and 300 postgraduates. The website has been redesigned to improve accessibility."
            />
          </div>
          <div className="ECA-figright">
            <Image 
              src={railsoc}
              des="Rail and Transport society (ICRTS): society for enthusiasts of transportation (especially railway). 
              With help of other committee members, the webpage is also redesigned to reflect on the current growth of the society."
            />
          </div>
        </div>
        <div className="u-block ECA-webpagefig">
          <div className="ECA-figleft">
            <Image 
              src={eventinder}
              des="Eventinder: webpage built web.lab displaying events happening around the MIT campus. It is no longer maintained"
            />
          </div>
          <div className="ECA-figright">
            <Image 
              src={myself}
              des="Unsurprisingly, my personal webpage is handcrafted by myself. 
                This is a good reflection of how much I have progressed in webpage development (and other aspects as well)."
            />
          </div>
        </div>

        <div className="u-block">
          <h1>Volunteering</h1>
          <ul>
            <li>During the academic year of 2018-19 (year 1), I was a subcommittee member of the <a href="https://icpass.org/">Imperial College Public Awareness and Social Service (ICPASS) Society</a>. 
            My main duty was to organise the flagship event, <b>Famine 24</b>; as well as to edit the society megazine, the <a href="https://issuu.com/icpass/docs/passtimes_xmas_-_short__1__copy">PASSTIMES</a>.</li>
            <li>Together with my high school colleagues, we have offered free English classes in Cambodia in summer 2018. </li>
            <li> Together with the Hong Kong Federation of Youth Groups (<a href="https://hkfyg.org.hk/en/home/">HKFYG</a>), 
            we organised post-school activities for primary school students resided in Ping Shek Estate during the academic year of 2017-18. Those include tutorials and minigames. </li>
          </ul>
        </div>
        <div className="u-block ECA-bottom" style={{top: 24}}>
          <div className="ECA-secondfigleft">
            <Image 
              src={cambodia}
              des="Offering English classes in Cambodia service trip, 2018 summer. Credit to Richard Lee."
            />
          </div>
          <div className="ECA-secondfigright">
            <h1 style={{marginTop: 0}}> Other hobbies </h1>
            <ul>
              <li>Playing piano. (Currently learning how to play synthesiser and drum!)</li>
              <li>Travelling <b>by train</b>.</li>
              <li>Cycling around London</li>
              <li>Building stuff in Minceraft (not the famous game Minecraft).</li>
              <li>I am a staff in Imperial College DramSoc.</li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default ECA;
