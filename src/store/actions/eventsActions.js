import axios from '../../axios/axiosInstance';

import {
    FETCH_EVENTS,
    FETCH_EVENTS_START,
    FETCH_EVENTS_SUCCESS,
    FETCH_EVENTS_FAIL,
    SET_UP_EVENTS
} from './actionTypes';

export const fetchEventsStart = () => {
    return {
        type: FETCH_EVENTS_START,
    }
}

export const fetchEventsFailed = error => {
    return {
        type: FETCH_EVENTS_FAIL
    }
}

export const setUpEvents = (dailyEvents, specialEvents) => {
    return {
        type: SET_UP_EVENTS,
        dailyEvents: dailyEvents,
        specialEvents: specialEvents
    }
}

export const fetchEvents = () => dispatch => {
    dispatch(fetchEventsStart());

    axios.get("/events.json")
        .then(response => {
            console.log(response);
            const events = response.data;

            let dailyEvents = [];
            let specialEvents = [];
            for (let key in events) {
                if (events[key].type === "daily") {
                    dailyEvents.push(events[key]);
                }

                if (events[key].type === "special") {
                    specialEvents.push(events[key]);
                }
            }

            dispatch(setUpEvents(dailyEvents, specialEvents));
        })
        .catch(error => console.log(error));
}