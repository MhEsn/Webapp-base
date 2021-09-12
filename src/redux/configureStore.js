import { configureStore } from '@reduxjs/toolkit';
import AuthReducer from './reducers/AuthReducer';
import LoadingReducer from './reducers/LoadingReducer';

export const store = configureStore({
    reducer: { AuthReducer, LoadingReducer },
    devTools: process.env.NODE_ENV !== 'production'
})