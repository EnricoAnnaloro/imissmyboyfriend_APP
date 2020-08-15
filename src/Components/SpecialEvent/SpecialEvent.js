import React from 'react';

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

    return (
        <div className={clickPointerClass} onClick={clickFunction}>
            <h3>{props.event.title}</h3>
            {timer}
        </div>
    );
}

export default SpecialEvent;
