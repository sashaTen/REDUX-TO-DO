import Redux from "./redux";
import "./styles.css";
import { useSelector, useDispatch } from "react-redux";
import { createContext, useState } from "react";
import { combineReducers, createSlice, configureStore } from "@reduxjs/toolkit";
export default function App() {
  return (
    <div className="App">
      <Redux />

      <button>-</button>
      <h2></h2>
    </div>
  );
}
