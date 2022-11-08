import {createAction,createReducer} from "@reduxjs/toolkit";

export const setUser = createAction("SET_USER");
export const setCarrito   = createAction("SET_CARRITO");

const initialState = {
    id: null,
    name: null,
    lastname: null,
    email: null,
    favorites: [],
    carrito: [],
};

const userReducer = createReducer(initialState, {
    [setUser]: (state, action) => ({...action.payload, favorites: [], carrito: []}),
    [setCarrito]: (state, action) => {state.carrito.push(action.payload)},
});

export default userReducer;