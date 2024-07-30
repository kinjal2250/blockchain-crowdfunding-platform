import axios from 'axios';
import { ISSUE_POLICY, CLAIM_POLICY } from './types';

export const issuePolicy = (policyData) => async (dispatch) => {
    try {
        const res = await axios.post(`${process.env.REACT_APP_API_URL}/insurance/issue`, policyData);
        dispatch({ type: ISSUE_POLICY, payload: res.data });
    } catch (error) {
        console.error(error);
    }
};

export const claimPolicy = (claimData) => async (dispatch) => {
    try {
        const res = await axios.post(`${process.env.REACT_APP_API_URL}/insurance/claim`, claimData);
        dispatch({ type: CLAIM_POLICY, payload: res.data });
    } catch (error) {
        console.error(error);
    }
};
