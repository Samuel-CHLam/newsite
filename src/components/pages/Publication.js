import React, { Component } from "react";

import "../../utilities.css";
import "./Publication.css";
import TopBanner from "../modules/TopBanner.js";
import PublicationBackground from "../../img/PublicationBanner.png";

import M4R from "../../data/Publication/M4R_Final_Report.pdf"
import TimesClass from "../../data/Publication/15_077_Project.pdf";
import BCG from "../../data/Publication/6435_project.pdf";
import Empirical from "../../data/Publication/Empirical.pdf";
import RMTPDF from "../../data/Publication/18_338_Final_Project.pdf";
import RMTPres from "../../data/Publication/18_338_Presentation.pdf";
// import RMTNote from "../../data/Publication/18_338_Final_Notebook.html";
import PWSPDF from "../../data/Publication/18_353_Pilot_Wave_System.pdf";
import UROP1 from "../../data/Publication/UROP_Task_1.pdf";
import UROP2 from "../../data/Publication/UROP_Task_2.pdf";
import M1RPDF from "../../data/Publication/M1R_Poster.pdf";
import M1RPres from "../../data/Publication/M1R_Slides.pdf";

class Publication extends Component {
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
          background={PublicationBackground}
          title={(<span className="publication-highlight"> PUBLICATION </span>)}
          content={(<>Here is a list of writings in mathematics. They are mainly Expository
          papers, but I am working towards publishing a book and further resources. </>)}
          des="Image: Return map of Pilot Wave system - taken from 18.353 final project."
        />
        <div className="u-block">
            <h2> Book/Notes </h2>
              <ul>
                <li> <b>(In progress)</b> Probability Theory. (with I. Kirev)</li>
              </ul>
            <h2> Final Year Project </h2>
              <ul>
                <li>An exposition to the asymptotic equivalence of several nonparametric regression problems, 2022. (supervised by A. Young) <a href={M4R}>Paper</a></li>
              </ul>
            <h2> Expository Paper </h2>
            <p>Some miscellaneous informal expository writings on math. They are mainly my coursework.</p>
            <h4>Year 4 @Imperial</h4>
                <ul>
                  <li>Permanance and Chaos of Game and Reinforcement Dynamics, 2022 (Final project of course MATH97069 Dynamics of Games) <a href="https://samuel-chlam.github.io/dynamics_of_games/">Website</a></li>
                </ul>
            <h4>Year 3 @MIT</h4>
              <ul>
                <li>Classification of Financial Time Series (with H. Yu), 2021 (Final project of course 15.077 Statistical Machine Learning and Data Science) <a href={TimesClass}>Notes</a></li>
                <li>Two Approaches of Probabilistic Solvers (with G. Guryev), 2021 (Final project of course 6.435 Bayesian Inference) <a href={BCG}>Notes</a></li>
                <li>Empirical Distribution Theory (with S. Im), 2020. (Final project of course 18.675 Theory of Probability) <a href={Empirical}>Notes</a> </li>
                <li>Computation of Empirical Measure, 2020. (Final project of course 18.338 Random Matrices) <a href={RMTPDF}>Notes</a>, <a href={RMTPres}>Slides</a></li>
                <li>Characterising Chaos in Pilot Wave System, 2020. (Final project of course 18.353 Non-Llinear Dynamics I: Chaos). <a href={PWSPDF}>Notes</a></li>
              </ul>
            <h4>Year 1/2 @Imperial</h4>
              <ul>
                <li>Enhanced Diffusion Process. 2020. (supervised by M. Coti-Zelati) (2nd year UROP) <a href={UROP1}>Stage 1</a>, <a href={UROP2}>Stage 2</a> completed. Stage 3 to be resumed after more studies on backward SDE.</li>
                <li>A Retrospective Analysis of Governmental Interventions to COVID-19, 2020. (with H. Liu et. al. supervised by A. Duncan) (2nd year research project) <b>Available upon request.</b></li>
                <li>Simple Application of Approximate Bayesian Computation (ABC) in Modelling Tumor Growth, 2019. (supervised by A. Duncan) (1st year research project) <a href={M1RPDF}>Poster</a>, <a href={M1RPres}>Slides</a></li>
              </ul>
        </div>
      </div>
    );
  }
}

export default Publication;