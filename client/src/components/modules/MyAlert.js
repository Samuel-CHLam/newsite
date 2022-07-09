import React, { Component } from "react";
import "./MyAlert.css";

/**
 * Prototype
 * @param {string} content
 * @param {string} alerttype
 */

class MyAlert extends Component {
    constructor(props) {
      super(props);
    }
  
    render() {
    let Content = null;

    if (this.props.alerttype === "green") {
        Content = (<div className="alert alert-green"> {this.props.content} </div>);
    } else if (this.props.alerttype === "yellow") {
        Content = (<div className="alert alert-yellow"> {this.props.content} </div>);
    } else if (this.props.alerttype === "red") {
        Content = (<div className="alert alert-red"> {this.props.content} </div>);
    } else {
        Content = (<div className="alert"> {this.props.content} </div>);
    }

      return (
        Content
      )
    }
  }

  export default MyAlert