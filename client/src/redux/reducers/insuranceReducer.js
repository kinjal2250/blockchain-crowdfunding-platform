import { ISSUE_POLICY, CLAIM_POLICY } from '../actions/types';

const initialState = {
    policies: [],
    policy: null,
};

export default function (state = initialState, action) {
    switch (action.type) {
        case ISSUE_POLICY:
            return {
                ...state,
                policies: [...state.policies, action.payload],
            };
        case CLAIM_POLICY:
            return {
                ...state,
                policy: action.payload,
            };
        default:
            return state;
    }
}
