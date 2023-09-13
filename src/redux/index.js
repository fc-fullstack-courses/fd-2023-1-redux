import { configureStore } from '@reduxjs/toolkit';
import taskReducer from './slices/taskSlice';
import userReducer from './slices/userSlice';
import counterReducer from './slices/counterSlice';


const store = configureStore({
  reducer: {
    counter: counterReducer,
    task: taskReducer,
    user: userReducer
  },
});

export default store;