import {createAction,createReducer} from "@reduxjs/toolkit";

export const setUser = createAction("SET_USER");


const initialState = {
    id: null,
    name: null,
    lastname: null,
    email: null,
    favorites: [],
};

const userReducer = createReducer(initialState, {
    [setUser]: (state, action) => ({...action.payload, favorites: []}),
});

export default userReducer;