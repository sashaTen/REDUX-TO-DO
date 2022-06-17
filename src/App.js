import Redux from "./redux";
import "./styles.css";
import { createContext, useState } from "react";
import { combineReducers, createSlice, configureStore } from "@reduxjs/toolkit";
export default function App() {
  return (
    <div className="App">
      <Redux />
    </div>
  );
}
