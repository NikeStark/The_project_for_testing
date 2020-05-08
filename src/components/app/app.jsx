import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom';
import Home from '../home/home.jsx';
import SectionDataList from '../section-data-list/section-data-list.jsx';
import Header from '../header/header.jsx';
import SectionGreeting from '../section-welcome/section-greeting.jsx';
import GoogleForm from '../google-form/google-form.jsx';
import LoginPage from '../login-page/login-page.jsx';

import './app.css';

export default class App extends Component{

    state = {
        isLoggedIn: false
    }

    onLogin = () => {
        this.setState({
            isLoggedIn: true
        })
    }
 
    render(){

        const{isLoggedIn} = this.state

        return(
                <Router>
                    <Header />
                        
                        <div className='route-context'>
                            <div className='inside'>
                            <Switch>
                                <Route path="/" 
                                    render={() => <SectionGreeting />}
                                    exact />
                                <Route path="/google-form"
                                    render={() => (
                                        <GoogleForm isLoggedIn={isLoggedIn}/>
                                    )} 
                                />
                                    
                                <Route path="/home" 
                                    render={() => (
                                        <Home isLoggedIn={isLoggedIn}/>
                                    )}
                                />
                                
                                <Route path="/login"
                                    render={() => (
                                        <LoginPage 
                                            isLoggedIn={isLoggedIn}
                                            onLogin={this.onLogin}/>
                                    )}
                                />

                                <Route path="/section-data-list" component={SectionDataList} />
                                
                                {/*<Redirect to="/"/>*/}
                                <Route render={() => <h2 
                                    style={{textAlign:"center", marginTop:"30px"}}>
                                        Page NOT found...
                                    </h2>} 
                                />
                            </Switch>
                            </div>
                        </div>
                </Router>
        )
    }
}