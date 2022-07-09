import React, { Component } from "react";
import "./NotFound.css";

class NotFound extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="notfound">
        <div className="notfound-bodycontainer">
          <h1>404 Not Found</h1>
          <p>The page you requested couldn't be found.</p>
          <p className="notfound-des">  &#9654; Taken under the Sibelius Tree, Helsinki. </p>
        </div>
      </div>
    );
  }
}

export default NotFound;
