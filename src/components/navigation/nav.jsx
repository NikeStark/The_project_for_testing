import React from 'react';
import {NavLink} from 'react-router-dom';

import './nav.css';

import Translate from "react-translate-component";

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
                    <li><NavLink to="/home">
                        <Translate content="home" component="ul"/>
                        </NavLink>
                    </li>
                    <li><NavLink to="/section-data-list">
                        <Translate content="fakeAPI" component="ul"/>
                        </NavLink>
                    </li>
                    <li><NavLink to="/login">
                        <Translate content="logIn" component="ul"/>
                        </NavLink>
                    </li>
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