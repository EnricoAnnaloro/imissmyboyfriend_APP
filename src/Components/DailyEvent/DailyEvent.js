import React from 'react';

import './DailyEvent.css';

const DailyEvent = props => {

    return (
        <div className={"DailyEvent__pointer"} onClick={props.eventClicked}>
            <h3>{props.event.title}</h3>
        </div>
    );
}

export default DailyEvent;
