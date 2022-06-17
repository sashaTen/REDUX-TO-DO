import { createContext, startTransition, useState } from "react";
import { combineReducers, createSlice, configureStore } from "@reduxjs/toolkit";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, selectCount } from "./counterSlice";
import store from "./counterSlice";
const Redux = () => {
  const count = useSelector(selectCount);
  const dispatch = useDispatch();
  return (
    <>
      hello redux
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
      {count}
    </>
  );
};

export default Redux;
