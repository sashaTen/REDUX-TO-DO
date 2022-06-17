import { useSelector, useDispatch } from "react-redux";
import { createContext, useState } from "react";
import { combineReducers, createSlice, configureStore } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: {
    value: 0
  },
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    }
  }
});

export const { increment, decrement } = counterSlice.actions;
export default configureStore({
  reducer: counterSlice.reducer
});

export const selectCount = (state) => state.value;
