import { CREATE_PROJECT, GET_PROJECTS, INVEST_PROJECT, WITHDRAW_FUNDS } from '../actions/types';

const initialState = {
    projects: [],
    project: null,
};

export default function (state = initialState, action) {
    switch (action.type) {
        case CREATE_PROJECT:
            return {
                ...state,
                projects: [...state.projects, action.payload],
            };
        case GET_PROJECTS:
            return {
                ...state,
                projects: action.payload,
            };
        case INVEST_PROJECT:
        case WITHDRAW_FUNDS:
            return {
                ...state,
                project: action.payload,
            };
        default:
            return state;
    }
}
