import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Home from '../home/home.jsx';
import Button from '../button/button.jsx';
import Header from '../header/header.jsx';
import SectionGreeting from '../section-welcome/section-greeting.jsx';

import './app.css';

export default class App extends Component{
    render(){
        return(
                <Router>
                <Header />

                        <div className='route-context'>
                            <div className='inside'>
                                <Route path="/" 
                                    render={() => <SectionGreeting />}
                                    exact />
                                <Route path="/home" component={Home}/>
                                <Route path="/button" component={Button}/>
                                <Route path="/button" component={Button}/>
                            </div>
                        </div>
                </Router>
        )
    }
}