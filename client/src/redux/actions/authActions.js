import axios from 'axios';
import { LOGIN_SUCCESS, LOGOUT, SIGNUP_SUCCESS } from './types';

export const signup = (userData) => async (dispatch) => {
    try {
        const res = await axios.post(`${process.env.REACT_APP_API_URL}/auth/signup`, userData);
        dispatch({ type: SIGNUP_SUCCESS, payload: res.data });
    } catch (error) {
        console.error(error);
    }
};

export const login = (userData) => async (dispatch) => {
    try {
        const res = await axios.post(`${process.env.REACT_APP_API_URL}/auth/login`, userData);
        dispatch({ type: LOGIN_SUCCESS, payload: res.data });
    } catch (error) {
        console.error(error);
    }
};

export const logout = () => (dispatch) => {
    dispatch({ type: LOGOUT });
};
