import { createStore, combineReducers } from "redux";
import nameReducer from "./reducer.js/nameReducer";
import emailReducer from "./reducer.js/emailReducer";

const combine = combineReducers({nameReducer, emailReducer})

const store = createStore(combine);

export default store;