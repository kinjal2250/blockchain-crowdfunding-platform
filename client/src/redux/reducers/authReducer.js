import { LOGIN_SUCCESS, LOGOUT, SIGNUP_SUCCESS } from '../actions/types';

const initialState = {
    isAuthenticated: false,
    token: null,
    user: null,
};

export default function (state = initialState, action) {
    switch (action.type) {
        case SIGNUP_SUCCESS:
        case LOGIN_SUCCESS:
            return {
                ...state,
                isAuthenticated: true,
                token: action.payload.token,
                user: action.payload.user,
            };
        case LOGOUT:
            return {
                ...state,
                isAuthenticated: false,
                token: null,
                user: null,
            };
        default:
            return state;
    }
}
