import React, { Component } from "react";

import "../../utilities.css";
import "./Achieve.css";

import TopBanner from "../modules/TopBanner.js";
import ImageFlex from "../modules/ImageFlex.js";

import ResumeBackground from "../../img/ResumeBanner.png";
import {EducationList} from "../../data/Resume/Education.js";
import ResumePDF from "../../data/Resume/CV_2022_V1.pdf";
import Coding from "../modules/Coding.js";
import CourseList from "../modules/CourseList.js";

class Achieve extends Component {
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
          background={ResumeBackground}
          title={<> <span className="achieve-highlight">Curriculum Vitae</span> and Achievements </>}
          content={<> This page contains my general background and skills.</>}
          des="Taken in 2018 during final presentation of Year 1 Research Project.
          The project aims to predict tumor growth by bayesian computations. A high
          score of 98% is achieved in this project."
        />
        <div className="u-block">
          <h4> A PDF version of my curriculum vitae can be found <a href={ResumePDF}>here</a>. </h4>
        </div>
        <div className="u-block">
          <h2> Education </h2>
          {EducationList.map((item) => { return (
              <ImageFlex key={item.key} imageandDes={item}/>)
            })}
        </div>
        <div className="u-block">
          <h2> Languages </h2>
          <p> <b> Native: </b> Chinese, Cantonese; <b> Fluent: </b> English </p>
        </div>
        <div className="u-block">
          <h2> Coding Skills </h2>
          <div> 
            {/* <Coding /> */}
            <ul>
              <li><b>Scientific Computing:</b> Julia, MATLAB, Python, R. </li>
              <li><b>Webpage Developments:</b> HTML5, CSS3, Javascript with MERN. </li>
            </ul>
          </div>
        </div>
        <div className="u-block">
          <h2> Courses Hall of Fame </h2>
        </div>
        <CourseList />
      </div>
    );
  }
}

export default Achieve;
