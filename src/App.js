/*

carInfo  :  {
  price  ,  name   ,   year
}

slice  create 
slice.reducer put  into  the  store

*/

import "./styles.css";
import { createContext, useState } from "react";
import { combineReducers, createSlice, configureStore } from "@reduxjs/toolkit";
export default function App() {
  const original = {
    value: 0
  };
  const countReducer = (state = original, action) => {
    if (action.type === "plus") {
      return state.value + 1000;
    } else if (action.type === "minus") {
      return state.value - 1000;
    }

    return state;
  };

  const action = (text) => {
    return {
      type: text
    };
  };
  ///////////////////car   info

  const carInfo = createSlice({
    name: "carSlice",
    initialState: {
      year: 2020,
      price: 20000,
      carName: "mercedez"
    },
    reducers: {
      deleteCarName: (state) => {
        state.carName = "";
      }
    },
    nullPrice: (state) => {
      return { ...state, price: 0 };
    }
  });

  /////////////change  name  reudcer  second  one
  const user = {
    name: "alecander",
    age: 28,
    job: "data   scientist"
  };
  const NameReducer = (state = user, action) => {
    if (action.type === "uppercase") {
      return { ...state, name: "Sasha Ten" };
    }

    return state;
  };

  const store = configureStore({
    reducer: {
      counter: countReducer,
      changeName: NameReducer,
      cars: carInfo.reducer
    }
  });

  store.dispatch(action("carSlice/nullPrice"));
  store.dispatch(action("uppercase"));
  store.dispatch(action("minus"));
  console.log(store.getState());

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}
