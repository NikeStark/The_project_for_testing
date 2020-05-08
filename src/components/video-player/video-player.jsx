import React, { useState } from 'react';
import ReactPlayer from 'react-player';

import './video-player.css';

const VideoPlayer = () => {
    const [watchComplete, setWatchComplete] = useState(false);

    const handleWatchComplete = ({played}) => {
        if(played > 0.0004 && played < 1 && !watchComplete){
           setWatchComplete(true);
        } else if(played === 1 && !watchComplete){
            setWatchComplete(false); 
        }
    }

    return(
        <div className='player-wrapper'>
        <ReactPlayer
          url='https://www.youtube.com/watch?v=ysz5S6PUM-U'
          className='react-player'
          controls
          width='540px'
          height='240px'
          onProgress = {handleWatchComplete}
        />

        <div className={watchComplete ? "player player--is-complete" : null}>
                <img src="https://i.ya-webdesign.com/images/music-speaker-png-6.png" 
                alt="greet-pict" 
                className="sticker"/>
                <p className="label">Good listening!</p>
        </div>

        </div> 
    )
}

export default VideoPlayer;