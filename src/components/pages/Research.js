import React, { Component } from "react";
import { Link } from "@reach/router";

import "../../utilities.css";
import "./Research.css";
import TopBanner from "../modules/TopBanner.js";
import Image from "../modules/Image.js";
import tracyWidom from "../../img/tracywidom.png";
import Predictive from "../../img/PredictiveNew.png";
import Diffusion from "../../img/Diffusion_Comparison.png";
import mathBackground from "../../img/MathBanner.png";

class Research extends Component {
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
          background={mathBackground}
          title={<> To the wonder of <span 
          className="math-banner-highlight"> Statistical 
          Learning </span> and <span
          className="math-banner-highlight"> Stochastic Analysis </span> </>}
          content="I study how the relation between dynamical systems and SDE can be
          utilised to establish quantitative results. I also study efficiency of  
          Bayesian Inferences and statistical properties of estimators arisen in
          machine learning algorithms."
          des={<> Samples from brownian bridge. The <i>Empirical Central Limit 
            Theorem</i> reveals that empirical process converges weakly to brownian 
            bridge as size of sample increases. Taken from 18.675 final paper with Shawn Im. </>}
        />
      <div className="u-block">
        <div className="research-container">
          <div className="research-ml-left">
            <Image src={tracyWidom}
            des="Tracy Widom Distribution - the distribution of the largest eigenvalue of
            a symmetric matrix." />
          </div>
          <div className="research-ml-right">
            <h3> Theory of Statistical Learning </h3>
            <p> Statistical Learning (including Machine learning) aims to explore the underlying features of datasets and make sound predictions. 
              I am interested in the statistical properties of the estimators arisen from machine learning algorithms (e.g. PCA). 
              Thanks to recent advances in random matrix theory, we may prove quantitative estimates of distributions of estimators 
              (e.g. oracle inequalities), and hence evaluate their reliability.</p>
          </div>
        </div>
        <div className="research-dy-top">
            <h3> Dynamical Systems and Stochastic Analysis </h3>
            <p> I have always been astonished by the relationship between deterministic differential equations and Stochastic Differential Equations (SDE). 
            The classical formulae of Dynkin and Feynman-Kac had helped us to study the quantitative behaviors of solutions to differential equations. 
            Recent studies revealed that chaotic systems like the Lorenz system behave like random walks. This motivates me to study how one can construct 
            dynamical systems that have similar behavior as solutions of SDE, and how could we exploit this relation in proving estimates for dynamical systems. 
            I am also drawn to understanding the behavior of return maps of chaotic systems.
            </p>
          </div>
          <div>
            <Image src={Diffusion}
              des="(Left) Numerical solutions of pure diffusion and advection-diffusion by finite difference scheme.
              (Right) Comparison of L2 energy of solutions of pure diffusion and advection-diffusion. The L2 energy
              decay at a faster rate under the inflence of advection flow. My second year UROP studies how rate of
              decay varies with the nature of flow." />
          </div>
        </div>
      <div className="u-block">
          <h3> Please visit <Link to="/publication">this</Link> page for publications. </h3> 
      </div>
      </div>
    );
  }
}

export default Research;
