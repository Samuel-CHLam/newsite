import React, { Component } from "react";

import "../../utilities.css";
import "./Home.css";

import { Link } from "react-router-dom";
import TopBanner from "../modules/TopBanner.js";
import HomeBackground from "../../img/PersonalBanner(2).png";
import randomWalk from "../../img/homerandom.png";
import Image from "../modules/Image.js";

class Home extends Component {
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
          background={HomeBackground}
          // title="CHUN HEI SAMUEL LAM"
          title={(<> CHUN HEI <span className="home-banner-highlight"> SAMUEL </span> LAM </>)}
          content="Aspiring applied mathematician."
          des="Taken at the main entrance of Imperial College London. Credit to Daniel Lo."
        />
        <div className="u-block">
          <div className="home-academic-one">
            <div className="home-flexleft">
              <p><b> I have recently graduated from <a href="https://www.imperial.ac.uk/">Imperial College London</a> with a first honour in MSci mathematics (with a Year Abroad). 
                I have previously participated in an exchange program at <a href="https://web.mit.edu/">Massachusetts Institute of Technology (MIT)</a>. 
                I am looking forward to participating the <a href="https://www.randomsystems-cdt.ac.uk/">CDT Mathematics of Random Systems</a> (jointly by <a href="https://www.ox.ac.uk/">University of 
                Oxford</a> and <a href="https://www.imperial.ac.uk/">Imperial College London</a>) upon graduation.
              </b></p>
              <p><b> Please visit my <a href="https://samuel-chlam.github.io/graduation/">graduation page</a> for further information.
              </b></p>
              <p> I am an applied mathematician working at the intersection of analysis and statistics. In particular, I study how tools in 
                analysis lead to theories of statistics and machine learning. Click <Link to="/research">here</Link> for more information.</p>
            </div>
            <div className="home-flexright">
              <Image src={randomWalk} 
              des="A trajectory simulated by a chaotic process, which
              resembles random walk." />
            </div>
          </div>
        </div>
        <div className="u-block">
          {/* <p>
            In addition to my research, I am creating resources to enhance undergraduates' experiences
            in learning computational mathematics and statistics. These include a book on multivariate analysis with
            demonstration in Julia language, and a repository of numerical methods. I am also a peer
            tutor at Imperial College helping current freshmen (first-year undergraudates) to adopt
            university life in a rapidly-changing Covid-19 situation.
            </p> */}
          <p>
            My personal journey in mathematics began when I entered the HKCCCU Logos Academy (a comprehensive
            school in Hong Kong). I had participated various enrichment programs offered by the Hong Kong University
            of Science and Technology (HKUST) from Grade 8 to Grade 11. I then completed GCE A-Level and joined Imperial 
            College London at the age of 16.
          </p>
          {/* <p> <Link to="/mystory"> Click here to read my stories. </Link> </p> */}
          </div>
        <div className="u-block">
          <h2> Outside academia... </h2>
          <p>
            I engage in a lot of things outside mathematics! I develop website, play a bit of music and bike around London. 
            As a christian, I am also interested in reading about my faith.
          </p>
          <p> <Link to="/christian"> Click here for my engagement as a christian. </Link> </p>
          <p> <Link to="/eca"> Click here for other extra-curricular engagements. </Link> </p>
        </div>
        </div>
    );
  }
}

export default Home;
