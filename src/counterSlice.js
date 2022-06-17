import { useSelector, useDispatch } from "react-redux";
import { createContext, useState } from "react";
import { combineReducers, createSlice, configureStore } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: {
    value: 0
  },
  reducers: {
    plus: (state) => {
      state.value += 1;
    },
    minus: (state) => {
      state.value -= 1;
    }
  }
});

export const { plus, minus } = counterSlice.actions;

export default configureStore({
  reducer: counterSlice.reducer
});
export const selectCount = (state) => state.value;
