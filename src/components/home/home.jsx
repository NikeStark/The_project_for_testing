import React, { Fragment } from 'react';
import { Redirect } from 'react-router-dom';

import './home.css';

const Home = ({isLoggedIn}) => {

    if(isLoggedIn){
        return(
            <Fragment>
                <div className="wrapper-home">
                    <p>Home</p>
                    Hello Home
                    dasd
                </div>
            </Fragment>
        )
    }

    return <Redirect to="/login"/>
}

export default Home;