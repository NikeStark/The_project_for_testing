import React from 'react';
import Nav from '../navigation/nav.jsx';
import {Link} from 'react-router-dom';

import './header.css';

const Header = () => {
    return(
        <div className="header">
            <Nav />

            <h3 className="array-initial-screen">
                <Link to="/">
                    <i className="far fa-arrow-alt-circle-left fa-lg"></i>
                </Link>
            </h3>
        </div>
    ) 
}

export default Header;