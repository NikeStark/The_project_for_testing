import React, { Fragment } from 'react';
import { Redirect } from 'react-router-dom';
import VideoPlayer from '../video-player/video-player.jsx';
import PropTypes from 'prop-types';

import './home.css';

const Home = ({isLoggedIn}) => {
    
    if(isLoggedIn){

        return(
            <Fragment>
                <div className="wrapper-home">
                    <h2>Have pleasure!</h2>   
                </div>
                    <VideoPlayer />
            </Fragment>
        )
    }

    return <Redirect to="/login"/>
}

export default Home;

Home.propTypes = {
    isLoggedIn: PropTypes.bool
}