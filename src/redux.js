import { createContext, startTransition, useState } from "react";
import { combineReducers, createSlice, configureStore } from "@reduxjs/toolkit";

const Redux = () => {
  const counterSlice = createSlice({
    name: "counter",
    initialState: {
      value: 0
    },
    reducers: {
      increment: (state) => {
        // Redux Toolkit allows us to write "mutating" logic in reducers. It
        // doesn't actually mutate the state because it uses the immer library,
        // which detects changes to a "draft state" and produces a brand new
        // immutable state based off those changes
        state.value += 1;
      },
      decrement: (state) => {
        state.value -= 1;
      },
      incrementByAmount: (state, action) => {
        state.value += action.payload;
      }
    }
  });

  const { increment, decrement } = counterSlice.actions;

  const store = configureStore({
    reducer: counterSlice.reducer
  });
  store.dispatch(increment());
  store.dispatch(decrement());
  store.dispatch(decrement());
  store.dispatch(decrement());
  store.dispatch(decrement());
  store.dispatch(decrement());
  console.log(store.getState());

  return <>hello redux</>;
};

export default Redux;
