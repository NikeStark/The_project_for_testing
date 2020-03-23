import React from 'react';

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
            <div className="wrapper">
                <div className="author-pict">
                    <img src="src/components/section-welcome/add-author.png" alt="add_pict" className="author"/>  
                    <img src="src/components/section-welcome/author.jpg" alt="own_photo" className="author"/> 
                    <img src="src/components/section-welcome/add-author.png" alt="add_pict" className="author"/> 
                </div>
            </div>
        </div>
    )
}

export default SectionGreeting;