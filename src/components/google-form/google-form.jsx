import React, { Fragment } from 'react';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

import './google-form.css';

const GoogleForm = ({isLoggedIn}) => {

    if(isLoggedIn){
        return(
            <Fragment>
            <h2 className="header-form">Please, fill in the form</h2>
            <div className="wrapper-form">
                <iframe src="https://docs.google.com/forms/d/e/1FAIpQLScGFCjNtD_O7VIHYru8TeITmeRx24pEhC_YcJsimylBAIFiCQ/viewform?embedded=true" 
                type="typeFrame" width="640" height="1120" frameBorder="0" marginHeight="0" marginWidth="0">Загрузка…</iframe>
            </div>
            </Fragment>
        )
        }
    
        return <Redirect to="/login" />
    }

    export default GoogleForm;

    GoogleForm.propTypes = {
        isLoggedIn: PropTypes.bool
    }