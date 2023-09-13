import { configureStore } from '@reduxjs/toolkit';
import taskReducer from './reducers/taskReducer';
import userReducer from './reducers/userReducer';
import counterReducer from './slices/counterSlice';


const store = configureStore({
  reducer: {
    counter: counterReducer,
    task: taskReducer,
    user: userReducer
  },
});

export default store;