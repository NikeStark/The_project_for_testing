import React from 'react';

const MyModal = ({handleModal}) => {
    return(
        <div className="wrapper-modal">
              <a href="https://www.google.com/" target="_blank">
                <img src="src/components/modal-view/google-adv.jpg"></img>
              </a>
              <button><i className="fa fa-times fa-larger" onClick={handleModal}></i></button>
              <span>Google Advertising for you</span>    
        </div>
    )
}

export default MyModal;