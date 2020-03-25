import React from 'react';
import {NavLink} from 'react-router-dom';

import './nav.css';

const tooltip = "React Documentation";

const Nav = () => {
    return(
        <div className="navigation">
             <div className="logoWrapper">
                <a href="https://ru.reactjs.org/docs/getting-started.html" target="_blank" 
                    data-tooltip={tooltip}>
                    <img src="https://www.vectorlogo.zone/logos/reactjs/reactjs-ar21.svg" 
                    height='60' alt="logo" />
                </a>
            </div>
            <nav>
                <ul className="nav">
                    <li><NavLink to="/home">Home</NavLink></li>
                    <li><NavLink to="/button">Button</NavLink></li>
                    <li><NavLink to="/button">Button</NavLink></li>
                    <li><NavLink to="/login">Log in</NavLink></li>
                </ul>
            </nav>
            <div className='social-media-icons'>
                <div className="icons">
                    <a href="https://vk.com/id513858348" target="_blank"><i className="fab fa-vk"></i></a>
                    <a href="#" target="_blank"><i className="fab fa-facebook-square"></i></a>
                    <a href="https://www.linkedin.com/in/aliaksandr-kazutsin-68aa14178/" target="_blank"><i className="fab fa-linkedin"></i></a>
                </div>
            </div>
        </div>
    )
}

export default Nav;