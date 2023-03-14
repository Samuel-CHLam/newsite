import React, { Component } from "react";

import "../../utilities.css";
import "./Teaching.css";
import TeachingBackground from "../../img/TeachingBanner.png";
import TopBanner from "../modules/TopBanner.js";
import FallInfo from '../../data/Teaching/FallInfo.pdf';
import SpringInfo from '../../data/Teaching/SpringInfo.pdf';

class Teaching extends Component {
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
          background={TeachingBackground}
          title={<span className="teaching-highlight"> Academic Outreach </span>}
          content={<> I have engaged in various teaching activities during my studies. I am also a co-founder for the Imperial College MathsWiki.</>}
          des="- Image: Clore Lecture Theatre -- the main lecture theatre 
          for Department of Mathematics at Imperial College London."
        />  
      <div className="u-block">
        <h1> Current Teaching </h1>
      </div>
      <div className="u-block">
            <h2 className="u-nomargin"> Oxford: MCF Deep Learning </h2>
            <p className="u-nomargin"> <b>Lecturer:</b> Prof. Justin Sirignano | <b>Tutor:</b> Yanzhao Yang (class 1), Den Waidmann (class 2)</p>
            <p> <b>Term</b> 2023 Spring | <b>Time:</b> See announcement | <b>Venue:</b> L4, Mathematical Institute | <b>Role:</b> Teaching Assistant | <b> Syllabus:</b> <a href="https://courses.maths.ox.ac.uk/course/view.php?id=988">here</a>. </p>
            <p> <i>This course provides an introduction to deep learning, covering topics such as fully-connected networks, convolution neural networks, residual networks, recurrent neural 
              networks such as LSTMs, generative adversarial networks, and deep reinforcement learning. Optimization methods and distributed training algorithms will also be presented. 
              Students will gain experience in using PyTorch to train deep learning models with GPUs. Mathematical analysis of neural networks, reinforcement learning, and stochastic gradient 
              descent algorithms will also be covered in the lectures.</i> </p>
      </div>
      <div className="u-block">
        <h1> Past Teaching </h1>
      </div>
      <div className="u-block">
            <h2 className="u-nomargin"> Imperial: Peer Tutorial</h2>
            <p> <b>Term</b> 2021 Spring | <b>Time:</b> Monday 10:30-11:30 (GMT) | <b>Venue:</b> Virtual (Microsoft Teams) | <b>Role:</b> Tutor | <b> Syllabus:</b> <a href={SpringInfo} target="_blank" rel="noreferrer">here</a>. </p>
            <p> <i>Student discusses special topics related to lecture materials. Topics for the term: linear algebra in Python, QR factorisation, analysis of monotone functions, 
              least square estimation, Jordan canonical decomposition, R language and problems in bifurcation.</i> </p>
      </div>
      <div className="u-block">
            <h2 className="u-nomargin"> Imperial: Peer Tutorial </h2>
            <p> <b>Term</b> 2020 Fall | <b>Time:</b> Thursday 11:00-12:00 (GMT) | <b>Venue:</b> Virtual (Microsoft Teams) | <b>Role:</b> Tutor | <b> Syllabus:</b> <a href={FallInfo} target="_blank" rel="noreferrer">here</a>.  </p>
            <p> <i>Student discusses special topics related to lecture materials. Topics for the term: countability, supremum of functions, linear algebra in Python, Fourier series and 
              transformation of random variables in probability theory.</i> </p>
      </div>
      <div className="u-block">
        <h1> Imperial College MathsWiki </h1>
        <p>Founded on 29th December, 2022, this Wiki is part of a joint initiative between Imperial Mathematics Society (Mathsoc) 
          and Imperial Wiki Project (previously Imperial ChemEng Wiki). It is not only a centralised repository for course 
          materials, but also a virtual space for students to reflect and discuss the materials learnt. In addition to the resources 
          provided by maths lecturers and students in previous years, the wiki features original courses and blogs designed by 
          students. <b><a href="https://imperialmathswiki.com">Visit the MathsWiki here.</a></b></p>
        <h2>Contributed subjects</h2>
        <ul>
          <li>Differential Equations</li>
          <li>Statistical Modelling I</li>
          <li>Optimisation</li>
          <li>Probability Theory</li>
          <li>Asymptotic Analysis (Work in progress)</li>
          <li>Statistical Multivariate Analysis (Work in progress)</li>
        </ul>
      </div>
    </div>  
    );
  }
}

export default Teaching;
