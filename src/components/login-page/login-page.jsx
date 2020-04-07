import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

import './login-page.css';

export default class LoginPage extends Component {
    constructor(){
        super();
        this.state = {
            loading: false
        }
    }

    _isMounted = false;

    fetchData = () => {
        this.setState({
            loading: true
        });

         setTimeout(() => {
            if(this._isMounted){
            this.setState({
                loading: false
            })}
        }, 2000);
    }
    
    handleClick = e => {
        const{onLogin} = this.props;

        this.fetchData(e); 
        setTimeout(() => {
            onLogin(e);
        }, 2000); 
    }

    componentDidMount(){
        this._isMounted = true;
    }

    componentWillUnmount(){
        this._isMounted = false;
    }

    render(){
    const{loading} = this.state;    

    if(this.props.isLoggedIn){
        return  <Redirect to="/"/>
    } 

    return(
        <div className="wrapper-login-page">
            <p>Log in order to fill in the form!</p>
            <div className="btn-login-page">
                <button onClick={this.handleClick} disabled={loading}>
                    {loading && <i className="fa fa-cog fa-spin fa-fw"></i>}
                    {loading && <span>loading...</span>}
                    {!loading && <span>Log in</span>} 
                </button>
            </div>
        </div>
    )
}
}

LoginPage.propTypes = {
    isLoggedIn: PropTypes.bool,
    onLogin: PropTypes.func
}