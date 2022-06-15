import "./styles.css";
import { useState } from "react";
import { configureStore } from "@reduxjs/toolkit";
export default function App() {
  ///

  const original = {
    value: 0,
    job: "software  engineer"
  };

  const theReducer = (state = original, action) => {
    if (action.type === "plus") {
      return { ...state, value: state.value + 100 };
    } else if (action.type === "changeJob") {
      return { ...state, job: "web developer" };
    }
    return state;
  };

  const action = {
    type: "plus"
  };

  const store = configureStore({
    reducer: theReducer
  });

  store.dispatch({ type: "plus" });
  store.dispatch({ type: "changeJob" });

  //console.log(store.getState());

  ////////  the  selectors

  const selectValue = (state) => state.value;
  const selectJob = (state) => state.job;
  console.log(selectValue(store.getState()));
  console.log(selectJob(store.getState()));

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}
