import React, { Component } from 'react';
import Spinner from '../spinner/spinner.jsx';
import SectionGreetingData from '../section-welcome-data/section-greeting-data.jsx';
import './section-greeting.css';

export default class SectionGreeting extends Component{
    constructor(){
        super();
        this.state={
            loading: true
        }    
    }          

    fetchData = () => {
            this.setState({
                loading: false
            })
    }

    componentDidMount(){
        this.timeout = setTimeout(() => {
            this.fetchData();
        }, 1000);
    }

    componentWillUnmount(){
        clearTimeout(this.timeout);
    }

    render(){
    const{loading} = this.state;
    const spinner = loading ? <Spinner /> : null;
    const content = !loading ? <SectionGreetingData /> : null;
   
    return(
        <div className="section-greeting">
            {spinner}
            {content}
        </div>
    )
}
}