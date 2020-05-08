import React, { Fragment, Component } from 'react';
import {Link} from 'react-router-dom';

import './section-greeting-data.css';
import ModalView from '../modal-view/modal-view.jsx';

import counterpart from 'counterpart';
import Translate from 'react-translate-component';
import en from '../lang/en.js';
import de from '../lang/de.js';
import ru from '../lang/ru.js';
import ch from '../lang/ch.js';

counterpart.registerTranslations('en', en);
counterpart.registerTranslations('de', de);
counterpart.registerTranslations('ru', ru);
counterpart.registerTranslations('ch', ch);
counterpart.setLocale('en');

export default class SectionGreetingData extends Component {
    constructor(){
        super();
        this.state = {
            lang: 'en',
            show: false
        }
    }

    onLangChange = (e) => {
        this.setState({
            lang: e.target.value
        });
        counterpart.setLocale(e.target.value);
    }

    render(){
        const{lang} = this.state;
        return(
            <Fragment>
            <ModalView />
            <div className="wrapper-select">
            <select value={lang} onChange={this.onLangChange}>
                <option value="en">🏴󠁧󠁢󠁥󠁮󠁧󠁿&emsp;En</option>
                <option value="ru">🇷🇺&emsp;Ru</option>
                <option value="de">🇩🇪&emsp;De</option>
                <option value="ch">🇨🇳&emsp;Ch</option>
            </select>
            </div>
           
            <Translate content="title" component="h2"/>
            
            <div className="context">
                <Translate content="text.p1" component="p" />
                <Translate content="text.p2" component="p" />
                <Translate content="text.p3" component="p" />
                <Translate content="text.p4" component="p" />
            </div>

            <div className="wrapper-pict">
                <div className="author-pict">
                    <img src="src/components/section-welcome-data/add-author.png" alt="add_pict" className="author"/>  
                    <img src="src/components/section-welcome-data/author.jpg" alt="own_photo" className="author"/> 
                    <img src="src/components/section-welcome-data/add-author.png" alt="add_pict" className="author"/> 
                </div>
            </div>
    
            <div className="button_send_request">
                <div className="arrow-to-form">
                    <Translate content="p5" component="p"/>
                    <img src="https://pngimage.net/wp-content/uploads/2018/06/3d-%D1%81%D1%82%D1%80%D0%B5%D0%BB%D0%BA%D0%B8-png-.png" 
                    height='35' alt="logo" />
                </div>
                <Link to="/google-form">
                    <button className="pulse-button"></button>
                </Link> 
            </div>
             
        </Fragment>
    )
    }
}