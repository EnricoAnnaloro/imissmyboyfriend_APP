import {
    FETCH_EVENTS,
    FETCH_EVENTS_START,
    FETCH_EVENTS_SUCCESS,
    FETCH_EVENTS_FAIL,
    SET_UP_EVENTS
} from '../actions/actionTypes';

const initialState = {
    error: false,
    dailyEvents: [],
    specialEvents: [],
    isFetchingLoading: false
}

const reducer = (state = initialState, action) => {

    switch (action.type) {
        case FETCH_EVENTS_START:
            return {
                ...state,
                error: false,
                isFetchingLoading: true
            }

        case FETCH_EVENTS_FAIL:
            return {
                ...state,
                error: true,
                isFetchingLoading: false
            }

        case SET_UP_EVENTS:
            console.log("SET_UP_EVENTS")
            return {
                ...state,
                dailyEvents: action.dailyEvents,
                specialEvents: action.specialEvents,
                isFetchingLoading: false
            }

        default:
            return state
    }
}

export default reducer;