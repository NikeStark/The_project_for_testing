import React, { Component, Fragment } from "react";

import './section-data-list-product.css';

export default class SectionDataListProduct extends Component {
  render() {
     
    return (
        <Fragment>
        {this.props.show && (
          <div className="wrapper-data-product">
            
            <div className="headline-book">
                <h3>{this.props.dataProduct.title}</h3>
                <span><p>Author:</p>{this.props.dataProduct.author}</span>
            </div>

            <span className='line'></span>

            <div className="describe-book">
            <p>{this.props.dataProduct.describeBook.firstIndent}</p>
            <p>{this.props.dataProduct.describeBook.secondIndent}</p>
            </div>

            <img src={this.props.dataProduct.imageLink} 
            height={this.props.dataProduct.imgHeight} 
            alt={this.props.dataProduct.title}/>

            <div className="wrapper-button"> 
            <span onClick={this.props.onHide} className="button-buy">
              <i className="fas fa-shopping-cart"><span>Buy up</span></i>
            </span>
            <span onClick={this.props.onHide} className="button-close">
              <i className="fas fa-sign-out-alt fa-2x"></i>
            </span>
            </div>
          </div>
        )}
        </Fragment>
    );
  }
}