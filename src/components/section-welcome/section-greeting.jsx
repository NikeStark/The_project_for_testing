import React from 'react';
import {Link} from 'react-router-dom';

import './section-greeting.css';

const SectionGreeting = () => {
    return(
        <div className="section-greeting">
            <h2>Welcome to my application!</h2> 
            <div className="context">
                <p>Hello my favorite guest! This is the testing website for looking</p>
                <p>different cases of realization in this project.</p>
                <p>Try to pay attention on all of the niceties and good luck in your journey!</p>
                <p>The author: Aliaksandr Kazutsin...</p>
            </div>
            <div className="wrapper-pict">
                <div className="author-pict">
                    <img src="src/components/section-welcome/add-author.png" alt="add_pict" className="author"/>  
                    <img src="src/components/section-welcome/author.jpg" alt="own_photo" className="author"/> 
                    <img src="src/components/section-welcome/add-author.png" alt="add_pict" className="author"/> 
                </div>
            </div>
            <div className="button_send_request">
                <p>If you want to join in our rows, let me know</p>
                <Link to="/google-form">
                        <button className="pulse-button"></button>
                </Link> 
            </div>
            <div className="arrow-to-form">
            <img src="https://pngimage.net/wp-content/uploads/2018/06/3d-%D1%81%D1%82%D1%80%D0%B5%D0%BB%D0%BA%D0%B8-png-.png" 
                height='35' alt="logo" />
            </div>
        </div>
    )
}

export default SectionGreeting;