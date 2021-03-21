import React, { Component } from "react";

import "../../utilities.css";
import "./Home.css";
import { Link } from "@reach/router";
import TopBanner from "../modules/TopBanner.js";
import HomeBackground from "../../img/PersonalBanner(2).png";
import MyAlert from "../modules/MyAlert.js"
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
          content="I am a junior (third-year undergraduate student) at
          Imperial College London majoring in mathematics, currently 
          participating an exchange program at Massachusetts Institute
          of Technology (MIT)."
          des="Taken in 2018 at the main entrance of Imperial College London.
          Credit to Daniel Lo."
        />
        <div className="u-block"> 
        <MyAlert 
            alerttype="green"
            content={(<div> I am currently running for Webmaster positions in the Imperial College MathSoc and Imperial College
              Rail and Transport Society. Please vote for me. (Link to be updated.)
            </div>)}
          />
        <MyAlert 
            alerttype="red"
            content={(<div> This webpage is currently under development. A list of known issues are included in the <a href="https://github.com/Samuel-CHLam/newsite">
              Github page </a> for this webpage. </div>)}
          />
        </div>
        <div className="u-block">
        <div className="u-flex">
          <div className="home-flexleft">
            <h2> As an applied mathematician...</h2>
            <p style={{margin: 0}}>
              I mainly work in two areas of mathematics:
            </p>
            <ul>
              <li> <b> Theory of Statistics: </b> Develop fast algorithms for bayesian computations (e.g.
              Monte-Carlo); study statistical properties of estimators arisen from machine learning algorithms
              (e.g. components in PCA); applying statistical techniques to analyse and interpret real-life data. 
              </li>
              <li> <b> Dynamical System: </b> Utilise the connection between dynamical systems (e.g.
              Lorenz system) and stochastic processes to establish quantitative results. I am also
              drawn to the study of return maps of chaotic systems.
              </li> 
            </ul>
          </div>
          <div className="home-flexright">
            <Image src={randomWalk} 
            des="A trajectory simulated by a chaotic process, which
            resembles random walk." />
          </div>
        </div>
        </div>
        <div className="u-block">
          <p>
            In addition to my research, I am creating resources to enhance undergraduates' experiences
            in learning computational mathematics and statistics. These include a book on multivariate analysis with
            demonstration in Julia language, and a repository of numerical methods. I am also a peer
            tutor at Imperial College helping current freshmen (first-year undergraudates) to adopt
            university life in a rapidly-changing Covid-19 situation.
            </p>
          <p> <Link to="/publication"> Click here for more details and publications. </Link> </p>
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
            In addition, I enjoy performing music (mainly by playing piano), building Minecraft architectures, 
            exploring Christianity and developing webpages. I also enjoy cycling around (I have only learnt this when I 
            was Year 2)!
          </p>
          <p> <Link to="/christianity"> Click here for my engagement as a christian. </Link> </p>
          <p> <Link to="/eca"> Click here for other extra-curricular engagements. </Link> </p>
        </div>
        </div>
    );
  }
}

export default Home;
