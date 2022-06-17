import Redux from "./redux";
import "./styles.css";
import { useSelector, useDispatch } from "react-redux";
import { createContext, useState } from "react";
import { combineReducers, createSlice, configureStore } from "@reduxjs/toolkit";
import store from "./counterSlice";
import { Provider } from "react-redux";
export default function App() {
  console.log(store.getState());
  return (
    <div className="App">
      <Provider store={store}>
        <Redux />
        <h2>{store.getState().value}</h2>
      </Provider>
    </div>
  );
}
