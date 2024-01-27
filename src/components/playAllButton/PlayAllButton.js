import "./PlayAllButton.css"
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';
import { faCircleDown } from '@fortawesome/free-solid-svg-icons';


//Create the playallbutton to play the songs
const PlayAllButton = () => {

  const handleClick = () => {
    alert("playing all songs (simulated)...");
  };
  
  return (
    <div className="play-music">
        <button className="play-all-button btn" onClick={handleClick}>
                <FontAwesomeIcon icon={faPlay} className="play-icon"/>
                <span className="play-all">Play All</span>
                
        </button>
        <button className="down-button btn" >
        <FontAwesomeIcon icon={faCircleDown} className="down-icon-first"/>
        </button>
    </div>
    
  );
};

export default PlayAllButton;
