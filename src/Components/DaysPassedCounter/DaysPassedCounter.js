import React, { useState, useEffect } from 'react';

import './DaysPassedCounter.css';

const DaysPassedCounter = props => {

    const calculateTimeLeft = () => {
        const today = new Date();
        const goodbyeDate = new Date("August 03, 2020");

        let time_difference = null
        if (props.isCountdown) {
            time_difference = props.dueDate - today;
        } else {
            time_difference = today - goodbyeDate;
        }

        const timeLeft = {
            days: Math.floor(time_difference / (1000 * 60 * 60 * 24)),
            hours: Math.floor((time_difference / (1000 * 60 * 60)) % 24),
            minutes: Math.floor((time_difference / 1000 / 60) % 60),
            seconds: Math.floor((time_difference / 1000) % 60)
        };

        return timeLeft
    }

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    useEffect(() => {
        const timer = setTimeout(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);
    });

    return (
        <div className="DaysPassed__content">
            <div className="DaysPassed__singleCounter">
                <p>Days</p>
                <p>{timeLeft.days}</p>
            </div>
            <div className="DaysPassed__singleCounter">
                <p>Hours</p>
                <p>{timeLeft.hours}</p>
            </div>
            <div className="DaysPassed__singleCounter">
                <p>Minutes</p>
                <p>{timeLeft.minutes}</p>
            </div>
            <div className="DaysPassed__singleCounter">
                <p>Seconds</p>
                <p>{timeLeft.seconds}</p>
            </div>
        </div>
    );
}

export default DaysPassedCounter;
