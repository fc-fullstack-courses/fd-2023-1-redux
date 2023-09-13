import counterReducer from "./counterReducer";
import taskReducer from "./taskReducer";
import userReducer from "./userReducer";

const rootReducer = {
  counter: counterReducer,
  task: taskReducer,
  user: userReducer
};

export default rootReducer;