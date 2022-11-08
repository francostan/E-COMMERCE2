import {createAction,createReducer} from "@reduxjs/toolkit";

export const setFavorites = createAction("SET_FAVORITES");


const initialState = [];

const favoritesReducer = createReducer(initialState, {
    [setFavorites]: (state, action) => {
        return [...state, action.payload]},
    
});

export default favoritesReducer;