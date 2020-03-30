import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

import './login-page.css';

export default class LoginPage extends Component {

    state = {
        loading: false
    }

    fetchData = () => {
        this.setState({
            loading: true
        });
        setTimeout(() => {
            this.setState({
                loading: false
            })
        },3000);
    }
    
    handleClick = e => {
        const{onLogin} = this.props;

        this.fetchData(e); 
        setTimeout(() => {
            onLogin(e)
        },2000); 
    }

    componentWillUnmount = () => {             
        if (this.handleClick) {                 
            clearTimeout(this.handleClick && this.fetchData);              
        }                                        
      };     

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
                    {loading && <i className="fab fa-vk"></i>}
                    {loading && <span>loading...</span>}
                    {!loading && <span>Log in</span>} 
                </button>
            </div>
        </div>
    )
}
}