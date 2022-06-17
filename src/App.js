import Redux from "./redux";
import "./styles.css";
import { useSelector, useDispatch } from "react-redux";
import { createContext, useState } from "react";
import { combineReducers, createSlice, configureStore } from "@reduxjs/toolkit";
import store from "./counterSlice";
import { Provider } from "react-redux";

const App = () => {
  console.log(store.getState());

  return (
    <>
      <Provider store={store}>
        <Redux />
      </Provider>
    </>
  );
};

export default App;
