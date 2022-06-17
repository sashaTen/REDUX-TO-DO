/*

carInfo  :  {
  price  ,  name   ,   year
}

slice  create 
slice.reducer put  into  the  store

*/
import Redux from "./redux";
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
      deleteCarName: (state, action) => {
        state.carName = action;
      }
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
  const { deleteCarName } = carInfo.actions;
  //  store.dispatch(carInfo.actions.deleteCarName("volvo   X3"));

  store.dispatch(deleteCarName("nexia"));
  console.log(store.getState());

  return (
    <div className="App">
      <Redux />
    </div>
  );
}
