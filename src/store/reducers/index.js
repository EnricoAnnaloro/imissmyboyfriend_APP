import { combineReducers } from 'redux';

import authReducer from './authReducer';
import eventsReducer from './eventsReducer';

export default combineReducers({
    authReducer: authReducer,
    eventsReducer: eventsReducer
});