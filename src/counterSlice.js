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
      state.value += 10000;
    },
    minus: (state) => {
      state.value -= 100000;
    }
  }
});

const store = configureStore({
  reducer: counterSlice.reducer
});

export default store;

export const selectCount = (state) => state.value;
export const { plus, minus } = counterSlice.actions;
