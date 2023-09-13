import { createSlice } from "@reduxjs/toolkit";

const SLICE_NAME = 'tasks';

const initialState = {
  tasks: []
};

const taskSlice = createSlice({
  name: SLICE_NAME,
  initialState,
  reducers: {
    createTask: (state, action) => {
      const newTask = {
        id: Date.now(),
        body: action.payload,
        isDone: false
      }

      state.tasks.push(newTask);
    },
    deleteTask: (state, action) => {
      state.tasks = state.tasks.filter(task => task.id !== action.payload);
    },
    updateTask: (state, action) => {
      const { id, newValues } = action.payload;

      const taskIndex = state.tasks.findIndex(task => task.id === id);

      state.tasks[taskIndex] = { ...state.tasks[taskIndex], ...newValues }
    }
  }
});

const { reducer: taskReducer, actions } = taskSlice;

export const { createTask, deleteTask, updateTask } = actions;

export default taskReducer;