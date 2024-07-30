import axios from 'axios';
import { CREATE_PROJECT, GET_PROJECTS, INVEST_PROJECT, WITHDRAW_FUNDS } from './types';

export const createProject = (projectData) => async (dispatch) => {
    try {
        const res = await axios.post(`${process.env.REACT_APP_API_URL}/projects/create`, projectData);
        dispatch({ type: CREATE_PROJECT, payload: res.data });
    } catch (error) {
        console.error(error);
    }
};

export const getProjects = () => async (dispatch) => {
    try {
        const res = await axios.get(`${process.env.REACT_APP_API_URL}/projects`);
        dispatch({ type: GET_PROJECTS, payload: res.data });
    } catch (error) {
        console.error(error);
    }
};

export const investInProject = (investmentData) => async (dispatch) => {
    try {
        const res = await axios.post(`${process.env.REACT_APP_API_URL}/projects/invest`, investmentData);
        dispatch({ type: INVEST_PROJECT, payload: res.data });
    } catch (error) {
        console.error(error);
    }
};

export const withdrawFunds = (withdrawData) => async (dispatch) => {
    try {
        const res = await axios.post(`${process.env.REACT_APP_API_URL}/projects/withdraw`, withdrawData);
        dispatch({ type: WITHDRAW_FUNDS, payload: res.data });
    } catch (error) {
        console.error(error);
    }
};
