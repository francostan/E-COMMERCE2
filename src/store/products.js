import {createAction,createReducer} from "@reduxjs/toolkit";

export const setProducts = createAction("SET_PRODUCTS");


const initialState = [];

const moviesReducer = createReducer(initialState, {
    [setProducts]: (state, action) => action.payload,
    
});

export default moviesReducer;