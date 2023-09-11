import { combineReducers } from "redux";
import counterReducer from "./counterReducer";
import taskReducer from "./taskReducer";
import userReducer from "./userReducer";

const rootReducer = combineReducers({
  counter: counterReducer,
  task: taskReducer,
  user: userReducer
});

export default rootReducer;