import React, { Component } from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from '../home/home.jsx';
import Button from '../button/button.jsx';
import Header from '../header/header.jsx';

import './app.css';

export default class App extends Component{
    render(){
        return(
                <Router>
                <Header />

                        <div className='route-context'>
                            <div className='inside'>
                                <Route path="/home" component={Home}/>
                                <Route path="/button" component={Button}/>
                            </div>
                        </div>
                </Router>
        )
    }
}