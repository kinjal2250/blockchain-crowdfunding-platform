// import { createStore, applyMiddleware, combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
// import thunk from 'redux-thunk';
import authReducer from './reducers/authReducer';
import projectReducer from './reducers/projectReducer';
import insuranceReducer from './reducers/insuranceReducer';

const store = configureStore({
    reducer:{
        auth: authReducer,
    project: projectReducer,
    insurance: insuranceReducer,
    },
    // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
});

// const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
