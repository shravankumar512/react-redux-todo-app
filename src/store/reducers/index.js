import { combineReducers } from "@reduxjs/toolkit";
import todoReducer from "./todoReducer";

const allReducers = combineReducers({
  todos: todoReducer
});

export default allReducers;
