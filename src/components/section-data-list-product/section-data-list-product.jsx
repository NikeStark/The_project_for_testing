import React, { Component, Fragment } from "react";

import './section-data-list-product.css';

export default class SectionDataListProduct extends Component {
  render() {
    console.log(this.props.show);
    return (
        <Fragment>
        {this.props.show && (
          <div className="wrapper-data-product">

            <img src={this.props.dataModal.imageLink} 
            height={this.props.dataModal.imgHeight} 
            alt={this.props.dataModal.title}/>

            <div className="title-and-author">
                <h3>{this.props.dataModal.title}</h3>
                <span>{this.props.dataModal.author}</span>
            </div>
            <div className="wrapper-button"> 
            <button onClick={this.props.onHide} className="button-buy">Buy</button>
            <button onClick={this.props.onHide} className="button-close">Close</button>
            </div>
          </div>
        )}
        </Fragment>
    );
  }
}