import { createAction, createReducer } from "@reduxjs/toolkit";

export const setSubTotal = createAction("SET_SUBTOTAL");

const initialState = null;

const subTotalReducer = createReducer(initialState, {
  [setSubTotal]: (state, action) => action.payload,
});

export default subTotalReducer;
