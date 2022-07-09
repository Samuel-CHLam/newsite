import React, { Component } from "react";

import "../../utilities.css";
import "./Coding.css";

import css3 from "../../img/logo/skills/css.png";
import html5 from "../../img/logo/skills/html.png";
import julia from "../../img/logo/skills/julia.png";
import matlab from "../../img/logo/skills/matlab.png";
import mern from "../../img/logo/skills/mern_logo_cut.png";
import python from "../../img/logo/skills/python.png";
import rlang from "../../img/logo/skills/R.png";

const sciComp = [
    {lang: "Julia", src: julia},
    {lang: "MATLAB", src: matlab},
    {lang: "Python", src: python},
    {lang: "R", src: rlang},
]

const webDev = [
    {lang: "HTML5", src: html5},
    {lang: "CSS3", src: css3},
    {lang: "MongoDB, Express.js, React.js, Node.js (MERN)", src: mern},
]

class CodingCard extends Component {
    constructor(props) {
        super(props);
        this.state = {};
      }

    render() {
        return (
            <div className="coding-card">
                <img src={this.props.langObj.src} className="coding-fig" />
                <div className="coding-des"> {this.props.langObj.lang} </div>
            </div>
        )
    }
}

class Coding extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <>
      <div className="coding-block">
        <div className="coding-title"> <h3 className="u-nomargin"> Scientific Computing </h3> </div>
        <div className="u-flex coding-container"> 
            {sciComp.map( (item,i) => { return (
                <CodingCard key={i} langObj={item} />
            )})}
        </div>
        </div>
      <div className="coding-block">
        <div className="coding-title"> <h3 className="u-nomargin"> Webpage Developments </h3> </div>
        <div className="u-flex coding-container"> 
        {webDev.map( (item,i) => { return (
                <CodingCard key={i} langObj={item} />
            )})}
        </div>
        </div>
      </>
    );
  }
}

export default Coding;