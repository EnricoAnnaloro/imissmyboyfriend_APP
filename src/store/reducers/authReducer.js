import { USER_LOGIN_SUCCESS } from '../actions/actionTypes';

const initialState = {
    isAuthenticated: false,
    isLoading: false
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case USER_LOGIN_SUCCESS:
            return {
                isAuthenticated: true,
                isLoading: false
            }

        default:
            return state
    }
}

export default reducer;