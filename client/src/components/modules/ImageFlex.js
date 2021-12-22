import React, { Component } from "react";
import "./ImageFlex.css";
import "./Image.css";

/** Prototype
 * @param imageandDes
 */

class ImageFlex extends Component {
    constructor(props) {
      super(props);
      this.state = {};
    }
  
    render() {
      let Title = (<> </>);
      let Remark = (<> </>);

      if (this.props.imageandDes.titleright) {
        Title = (
            <div className="u-flex imageflex-margin"> 
                <div className="imageflex-title-left"> 
                    <h3 className="u-nomargin"> {this.props.imageandDes.title} </h3>
                    <p className="u-nomargin imageflex-title-des"> {this.props.imageandDes.titledes} </p>
                </div>
                <div className="imageflex-title-right">
                    <p className="u-nomargin"> {this.props.imageandDes.titleright} </p>
                </div>
            </div>
        )
      } else {
          Title = (
              <div className="imageflex-imageflex-margin"> 
                  <h3 className="u-nomargin"> {this.props.imageandDes.title} </h3>
                  <p> {this.props.imageandDes.titledes} </p>
              </div>
          )
      }

      if (this.props.imageandDes.remark) {
        Remark = (<p className="imageflex-remark imageflex-margin"> {this.props.imageandDes.remark} </p>)
      } 
      
      return (
        <div className="u-flex imageflex-container">
            <div className="imageflex-left"> 
                <img src={this.props.imageandDes.image} className="image"/> 
            </div>
            <div className="imageflex-right"> 
                {Title}
                <div className="imageflex-margin"> {this.props.imageandDes.content} </div>
                {Remark}
            </div>
        </div>
      )
    }
  }

  export default ImageFlex