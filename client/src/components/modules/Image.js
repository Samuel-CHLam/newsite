import React, { Component } from "react";
import "./Image.css";

class Image extends Component {
    constructor(props) {
      super(props);
      this.state = {};
    }
  
    render() {
      return (
        <>
            <img src={this.props.src} className="image"/>
            <p className="image-des"> &#9654; {this.props.des} </p>
        </>
      )
    }
  }

  export default Image