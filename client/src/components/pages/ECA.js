import React, { Component } from "react";

import "../../utilities.css";
import "./ECA.css";
import TopBanner from "../modules/TopBanner.js";
import Image from "../modules/Image.js"
import ImageFlex from "../modules/ImageFlex.js"

import ECABackground from "../../img/ECABanner.png";
import webpage from "../../img/webpage.png";
import minecraft from "../../img/minecraft_station.png";
import cambodia from "../../img/cambodia.jpg";
import {Year23, Year1} from "../../data/ECA/ECAEntries.js";

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
          des={<> Taken in 2018 during a rehearsal of <i> Imperial College 
            DramSoc</i> production of drama <i> And Then There Were None</i>.
            I was a Deputy Stage Manager in that production. Credit to Daniel Lo.</>}
        />
        <div className="u-block">
          <h2> Year 2/3</h2>
          <p> Not much could be done due to COVID-19 😢 -- I have tried my best: </p>
          <div>
            {Year23.map( (item) => { return (
              <ImageFlex key={item.key} imageandDes={item} />)
            })}
          </div>
        </div>
        <div className="u-block u-flex ECA-firstfig">
          <div className="ECA-figleft">
            <Image 
              src={webpage}
              des="Screenshot of the webpage we have built in web.lab. This is a webpage displaying events 
              happening around the MIT campus."
            />
          </div>
          <div className="ECA-figright">
            <Image 
              src={minecraft}
              des="A station built in my minecraft server."
            />
          </div>
        </div>
        <div className="u-block">
          <h2> Year 1</h2>
          <p> Despite my age, I was able to enjoy most of the activities a typical Imperial Hong Kong student would join in their first years.
            But my age stopped me from engaging more (Imperial College Union (ICU) did not allow me to run for committee positions. I even have difficulties
            in entering the ICU building at night). </p>
          <div>
            {Year1.map( (item) => { return (
              <ImageFlex key={item.key} imageandDes={item} />)
            })}
          </div>
          {/* <ul>
            <li> I am a subcommittee of Imperial College Public Awareness and Social Service 
              Society (<a href="https://www.imperialcollegeunion.org/activities/a-to-z/pass">ICPASS</a>). I am responsible in 
              the following events: 
              <ul>
                <li> <b>Famine 24:</b> Participants were required to experience the life of people in third-world countries by 
                starving for 24 hours and engage in specially-designed activities. We were responsible in designing activities related
                to conservation. </li>
                <li> <b>Oxford Model Legislative Council (OMLC):</b> We were responsible to draft and put forward a "model bill" related to 
                national security matters to the Model Legislative Council (Hong Kong equivalent to parliament/congress) for debate. </li>
                <li> I am also a member of <b>Publication Team</b>. We have 
                  published <a href="https://issuu.com/icpass/docs/passtimes_xmas_-_short__1__copy">PASSTIMES</a>, a 
                  bi-annual (?) magazine on ICPASS event highlights and proses. I think I have written a note on maximum likelihood 
                  estimation, but it is quite informal and might be erroneous...</li>
              </ul>  
                </li>
            <li> I have participated in various performances in the Imperial Dramatic Society (DramSoc):
              <ul>
                <li> <b> 2019 Spring: Legally Blonde (with ICU Musical Theatre Society): </b> As Sound Designer. </li>
                <li> <b> 2018 Autumn: And Then There Were None: </b> As Deputy Stage Manager. </li>
                <li> I also supported various productions in 2019 Spring Show, a series of shows by cultural societies. </li>
              </ul>
                </li>
            <li> I am a committee member of Hall Committee of Gabor Hall. </li>
          </ul> */}
        </div>
        <div className="u-block u-flex" style={{top: 24}}>
          <div className="ECA-secondfigleft">
            <Image 
              src={cambodia}
              des="Offering English classes in Cambodia service trip, 2018 summer. Credit to Richard Lee."
            />
          </div>
          <div className="ECA-secondfigright">
            <h2> High School </h2>
            <p> During my final years being high school student, I had participated in various voluntary services.</p>
            <ul>
              <li> <b> Cambodia Service Trip: </b> We offered English classes and build houses for villages in Cambodia. </li>
              <li> Together with the Hong Kong Federation of Youth Groups (<a href="https://hkfyg.org.hk/en/home/">HKFYG</a>), 
              we have organised post-school activities for primary school students resided in Ping Shek Estate, 
              including but not limited to tutorials and minigames. </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default ECA;
