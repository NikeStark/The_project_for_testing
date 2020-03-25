import React from 'react';
import { Redirect } from 'react-router-dom';

import './login-page.css';

const LoginPage = ({isLoggedIn, onLogin}) => {
    
    if(isLoggedIn){
        return  <Redirect to="/"/>
    }

    return(
        <div className="wrapper-login-page">
            <p>Log in order to fill in the form!</p>
            <div className="btn-login-page">
                <button onClick={onLogin}>
                    Log in
                </button>
            </div>
        </div>
    )
}

export default LoginPage;