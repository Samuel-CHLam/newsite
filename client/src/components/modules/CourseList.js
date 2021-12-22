import React, { Component } from "react";

import "../../utilities.css";
import "./CourseList.css";
import {Ythree, Ytwo, Yone} from "../../data/Resume/CourseArray.js";

// code has been organised -- I have used indices for key for simplicity, but this is not recommended in general.

/**
 * Properties
 * @param {string} yearObj name 
 */

class YearContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isExpanded: Boolean(false)
    };
  }

  onClick = () => {
    if (this.state.isExpanded) {this.setState({isExpanded: Boolean(false)})
    } else {this.setState({isExpanded: Boolean(true)})}
  }

  render () {
    /* Expand or Collapse */
    let pm = null
    if (this.state.isExpanded) {
      pm = (<button className="u-ordinarybutton" onClick={this.onClick}> - </button>)
    } else {
      pm = (<button className="u-ordinarybutton" onClick={this.onClick}> + </button>)
    }

    return (
      <div className="u-block">
        {/* Title Block */}
        <div className="courselist-title">
          <div className="courselist-title-left"> <h3 className="u-nomargin"> {this.props.yearObj.name} </h3> </div>
          <div className="courselist-title-right"> <h3 className="u-nomargin"> {pm} </h3> </div>
        </div>
        {this.state.isExpanded ? (
          <div className="courselist-year-container">
          {this.props.yearObj.termArray.map( (termObj,i) => {
            return (
              <div key={i}>
               <h4 className="u-nomargin"> {termObj.term}: </h4>
               <div className="courselist-grid"> 
               <div className="u-nomargin"> 
                <h5 className="u-nomargin"> Attended: </h5> 
                <ul className="u-nomargin">
                  {termObj.attended.map( (course,i) => { return (
                    <li key={i}> {course} </li>
                  )})}
                </ul></div>
               <div className="u-nomargin"> 
                <h5 className="u-nomargin"> Attended as a Listener: </h5> 
                <ul className="u-nomargin">
                  {termObj.listener.map( (course,i) => { return (
                      <li key={i}> {course} </li>
                  )})}
                </ul></div>
               </div>
              </div>
            )})}
          </div>
        ) : (<> </>)}
      </div>
    )
  }
}

class CourseList extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  componentDidMount() {
    // remember -- api calls go here!
  }

  render() {
    return (
      <>
        {[Ythree, Ytwo, Yone].map((year,i) => { return (
          <YearContainer key={i} yearObj={year} />
        )})}
      </>
    );
  }
}

export default CourseList;