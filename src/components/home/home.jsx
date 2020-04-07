import React, { Fragment } from 'react';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

import './home.css';

const Home = ({isLoggedIn}) => {

    if(isLoggedIn){
        
        return(
            <Fragment>
                <div className="wrapper-home">
                    <p>Home</p>
                </div>
            </Fragment>
        )
    }

    return <Redirect to="/login"/>
}

export default Home;

Home.propTypes = {
    isLoggedIn: PropTypes.bool
}