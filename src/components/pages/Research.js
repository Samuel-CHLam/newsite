import React, { Component } from "react";
import { Link } from "@reach/router";

import "../../utilities.css";
import "./Research.css";
import TopBanner from "../modules/TopBanner.js";
import Image from "../modules/Image.js";
import tracyWidom from "../../img/Ising_betaC.gif";
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
          title={<> <span 
          className="math-banner-highlight"> Statistical Learning Theory </span> with <span
          className="math-banner-highlight"> Stochastic Analysis </span> </>}
          content="I use tools in stochastic analysis and random matrix theory to study the properties of different estimators arises in statistical learning, especially deep learning."
          des={<> - Image: Samples from brownian bridge. The Empirical Central Limit Theorem reveals that empirical process converges weakly to brownian bridge as size of sample increases. 
          Taken from a final paper written with Shawn Im.</>}
        />
      <div className="u-block">
        <div className="research-container">
          <div className="research-ml-left">
            <Image src={tracyWidom}
            des={(<>Ising model is the canonical model for carrying out mean-field analysis. 
            Image: <a href="https://commons.wikimedia.org/w/index.php?curid=10049094">Ising model</a> by <a href="https://de.wikipedia.org/wiki/Benutzer:AlterVista">Benutzer:AlterVista</a> is 
            licensed under <a href="https://creativecommons.org/licenses/by-sa/3.0/?ref=openverse">CC BY-SA 3.0</a>.</>)}/>
          </div>
          <div className="research-ml-right">
            <h1> Theories in deep learning </h1>
            <p> Deep learning aims to explore the underlying features of datasets and make sound predictions by utilising the expressivity (ability 
              to represents a wide-range of relationships in datasets) of neural networks with multiple layers. </p>
            <h2>Current research</h2>
              <p>Current theories suggests that the training of infinite-width neural network could be either viewed as an ordinary differential equation 
                (neural tangent kernel) or partial differential equation (mean-field analysis). Under the supervision of <a href="https://jasirign.github.io">Prof. 
              Justin Sirignano</a>, my research extends the above theories to study the convergence of various standard learning algorithms.</p>
            <h2>Other research topics</h2>
              <ul>
                <li>Initialisation of neural network.</li>
                <li>Application of random matrix theory in reservoir computing.</li>
                <li>Application of neural network in solving differential equations and learning chaotic dynamical systems.</li>
                <li>Further spectral graph theory and clustering methods.</li>
              </ul>
          </div>
        </div>
      </div> 
      <div className="u-block">
          <h3> Preprint in progress - please visit <Link to="/publication">this</Link> page for previous expository writings. </h3> 
      </div>
      </div>
    );
  }
}

export default Research;
