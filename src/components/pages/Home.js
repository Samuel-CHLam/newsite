import React, { Component } from "react";

import "../../utilities.css";
import "./Home.css";

import { Link } from "react-router-dom";
import TopBanner from "../modules/TopBanner.js";
import HomeBackground from "../../img/andrew_wiles_building.jpg";
import randomWalk from "../../img/Grey_background.jpg";
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
          content="Aspiring deep learning theorist."
          des={(<>- Image: <a href="https://www.flickr.com/photos/11569642@N00/19924266231">July 21st, 2015 Oxford University Mathematical Institute, Andrew Wiles Building</a> by <a href="https://www.flickr.com/photos/11569642@N00">karenblakeman</a> is marked with <a href="https://creativecommons.org/publicdomain/zero/1.0/?ref=openverse">CC0 1.0</a>.</>)}
          opacity_left={0.7}
          opacity_right={0.7}
        />
        <div className="u-block">
          <div className="home-academic-one">
            <div className="home-flexleft">
              <h1>About me</h1>
              <ul>
                <li>DPhil Mathematics student at the <a href="https://www.univ.ox.ac.uk">University College, Oxford</a>.</li>
                <li>Supervised by Prof. Justin Sirignano.</li>
                <li>Member of the <a href="https://www.randomsystems-cdt.ac.uk/">CDT Mathematics of 
              Random System</a>, a collaboration between the University of Oxford and the Imperial College London.</li>
                <li>Studentship supported by an Oxford-Radcliffe scholarship (jointly offered by the EPSRC and University College, Oxford).</li>
              </ul>
              <p>Previously, I did a MSci at <a href="https://www.imperial.ac.uk/">Imperial College London</a>, with my third year spent at <a href="https://web.mit.edu/">MIT</a>.</p>
            </div>
            <div className="home-flexright">
              <Image src={randomWalk} maxWidth={720} />
            </div>
          </div>
        </div>
        <div className="u-block">
          <h1> Research </h1>
          <p>My research area is, broadly speaking, theories of deep learning. In particular, I work on the asymptotic limits of neural 
                networks (kernel limit and mean-field limit), and how they lead to stability and convergence results. I am also involved in mathematical pedagogy and outreach in my spare time.</p>
        </div>
        <div className="u-block">
          <h1> Outside academia... </h1>
          <p>I am also one of the cofounder of the <a href="http://imperialmathswiki.com">Imperial College MathWiki</a>, a 
              central repository for resources written by lecturers and students for courses offered at Imperial College. This is 
              part of a greater <a href="http://imperialwiki.com">Imperial Wiki Project</a> to foster cross-departmental 
              student-led initiatives in education and research.</p>
          <p>
            I engage in a lot of things outside mathematics! I develop website, play a bit of music and bike around Oxford and London. 
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
