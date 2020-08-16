import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faKissWinkHeart, faGrinSquintTears } from '@fortawesome/free-regular-svg-icons';
import { faMusic, faVideo, faImage, faGifts, faDove } from '@fortawesome/free-solid-svg-icons';

import DaysPassedCounter from '../../Components/DaysPassedCounter/DaysPassedCounter';
import './SpecialEvent.css';

const SpecialEvent = props => {

    let today = new Date()
    let active = new Date(props.event.date)

    let clickFunction = null;
    let clickPointerClass = "SpecialEvent__mainDiv";
    let timer = <DaysPassedCounter isCountdown={true} dueDate={active} />;
    if (active.getTime() < today.getTime()) {
        clickFunction = props.eventClicked;
        clickPointerClass = "SpecialEvent__mainDiv SpecialEvent__withPointer"
        timer = <p>Available Now!!</p>
    }

    let emoji = null;
    switch (props.event.emoji) {
        case "heart":
            emoji = <span style={{ margin: "0 10px" }}><FontAwesomeIcon icon={faHeart} /></span>
            break;
        
        case "kiss":
            emoji = <span style={{ margin: "0 10px" }}><FontAwesomeIcon icon={faKissWinkHeart} /></span>
            break;
        
        case "gifts":
            emoji = <span style={{ margin: "0 10px" }}><FontAwesomeIcon icon={faGifts} /></span>
            break;
        
        case "funnyFace":
            emoji = <span style={{ margin: "0 10px" }}><FontAwesomeIcon icon={faGrinSquintTears} /></span>
            break;
        
        case "dove":
            emoji = <span style={{ margin: "0 10px" }}><FontAwesomeIcon icon={faDove} /></span>
            break;
        
        default:
            break;
    }

    return (
        <div className={clickPointerClass} onClick={clickFunction}>
            <h3>{emoji}{props.event.title}{emoji}</h3>
            {timer}
        </div>
    );
}

export default SpecialEvent;
