import React, { useState, useEffect, Fragment } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faKissWinkHeart } from '@fortawesome/free-regular-svg-icons'
import { faExclamation, faYinYang } from '@fortawesome/free-solid-svg-icons'

import SpecialEvent from '../../Components/SpecialEvent/SpecialEvent';
import DailyEvent from '../../Components/DailyEvent/DailyEvent';
import EventModal from '../../Components/EventModal/EventModal';
import DaysPassedCounter from '../../Components/DaysPassedCounter/DaysPassedCounter';
import { fetchEvents } from '../../store/actions/index';
import './EventsPage.css';

const EventsPage = () => {

    const history = useHistory();
    const dispatch = useDispatch();

    const [displayedModalEvent, setDisplayedModalEvent] = useState(null);

    const isAuthenticated = useSelector(state => {
        return state.authReducer.isAuthenticated
    });

    const specialEvents = useSelector(state => {
        return state.eventsReducer.specialEvents
    });

    const dailyEvents = useSelector(state => {
        return state.eventsReducer.dailyEvents
    });

    const isFetchingLoading = useSelector(state => {
        return state.eventsReducer.isFetchingLoading
    });

    if (!isAuthenticated) {
        history.push('/login');
    }

    useEffect(() => {
        console.log("fetchEvents");
        dispatch(fetchEvents());
    }, []);

    const specialEventsDisplayed = specialEvents.map(event => {
        return (
            <SpecialEvent event={event} key={event.id} eventClicked={() => setDisplayedModalEvent(<EventModal event={event} onCloseModal={() => setDisplayedModalEvent(null)} />)} />
        )
    })

    const dailyEventsDisplayed = dailyEvents.map(event => {
        return (
            <DailyEvent event={event} key={event.id} eventClicked={() => setDisplayedModalEvent(<EventModal event={event} onCloseModal={() => setDisplayedModalEvent(null)} />)} />
        )
    })

    let content = <div className="EventsPage__loaderDiv"><FontAwesomeIcon icon={faYinYang} size="4x" className="EventsPage__loader" /></div>
    if (!isFetchingLoading) {
        content = (
            <Fragment>
                {displayedModalEvent ? displayedModalEvent : null}
                <div className="EventsPage__eventsContainer">
                    <div className="EventsPage__EventsSubContainer">
                        <h3 className="EventsPage__EventsTitle">
                            <FontAwesomeIcon className="EventsPage__SpecialIcon" icon={faExclamation} /><span style={{ margin: "0 10px" }}>Special Events</span><FontAwesomeIcon className="EventsPage__SpecialIcon" icon={faExclamation} />
                        </h3>
                        {specialEventsDisplayed}
                    </div>
                    <div className="EventsPage__EventsSubContainer">
                        <h3 className="EventsPage__EventsTitle">
                            <FontAwesomeIcon className="EventsPage__dailyIconLeft" icon={faKissWinkHeart} /><span style={{ margin: "0 10px" }}>Daily Events</span><FontAwesomeIcon className="EventsPage__dailyIconRight" icon={faKissWinkHeart} />
                        </h3>
                        {dailyEventsDisplayed}
                    </div>
                    <p className="EventsPage__iLoveYou"><FontAwesomeIcon icon={faHeart} /><span style={{ margin: "0 10px" }}>I Love You Babe</span><FontAwesomeIcon icon={faHeart} /></p>
                </div>
            </Fragment>
        )
    }

    return (
        <div className="EventsPage__mainDiv">
            <div className="DaysPassed__mainDiv">
                <div className="DaysPassed__title">
                    <h3>Time spent apart</h3>
                </div>
                <DaysPassedCounter dueDate={new Date("August 25, 2020")} isCountdown={false} />
            </div>
            {content}
        </div>
    );
}

export default EventsPage;
