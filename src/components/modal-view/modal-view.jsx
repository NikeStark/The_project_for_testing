import React, { Component, Fragment } from 'react';
import GoogleAdv from '../modal-view/modal-data.jsx';

import './modal-view.css';

export default class ModalView extends Component {
    constructor(){
        super();
        this.state = {
            showModal: false
        }
    }
  
    handleModal = () => {
        this.setState({showModal: !this.state.showModal});
    }

    componentDidMount(){
        this.timeout = setTimeout(() => {
          this.handleModal();
        },3000);
    }

    componentWillUnmount(){
        clearTimeout(this.timeout);
    }

  render() {
     
    return (
      <Fragment>
        { this.state.showModal && <GoogleAdv handleModal={this.handleModal}/> }
        {/*<button onClick={this.handleModal}>
            {showModal && <span>Close it</span>}
            {!showModal && <span>Show it</span>}
          </button>*/}
      </Fragment>
     )
  }
}