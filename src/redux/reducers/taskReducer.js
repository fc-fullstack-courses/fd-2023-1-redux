import { createReducer } from "@reduxjs/toolkit";
import { createTask, deleteTask, updateTask } from "../actions/tasksActionCreators";

const initialState = {
  tasks: []
}

const taskReducer = createReducer(initialState, (builder) => {
  builder.addCase(createTask, (state, action) => {
    const newTask = {
      id: Date.now(),
      body: action.payload,
      isDone: false
    }

    state.tasks.push(newTask);
  });

  builder.addCase(deleteTask, (state, action) => {
    state.tasks = state.tasks.filter(task => task.id !== action.payload);
  });

  builder.addCase(updateTask, (state, action) => {
    const { id, newValues } = action.payload;

    const taskIndex = state.tasks.findIndex((task, index) => id === task.id);

    state.tasks[taskIndex] = { ...state.tasks[taskIndex], ...newValues };

    // for(const entry of Object.entries(newValues)) {
    //   const [key, value] = entry;

    //   state.tasks[taskIndex][key] = value;
    // }
  });
});

// function taskReducer(state = initialState, action) {
//   switch (action.type) {
//     case ACTION_TYPES.ADD_TASK: {
//       const newTask = {
//         id: Date.now(),
//         body: action.payload,
//         isDone: false
//       }

//       const newTasks = [...state.tasks, newTask];

//       return {
//         ...state,
//         tasks: newTasks
//       }
//     }
//     case ACTION_TYPES.UPDATE_TASK: {
//       const { id, newValues } = action.payload;
//       const { tasks } = state;

//       const newTasks = [...tasks];

//       const taskIndex = newTasks.findIndex((task, index) => id === task.id);

//       const taskToUpdate = newTasks[taskIndex];

//       // Object.entries зная нужную таску
//       const updatedTask = { ...taskToUpdate, ...newValues };


//       newTasks[taskIndex] = updatedTask;

//       return {
//         ...state,
//         tasks: newTasks
//       }

//     }
//     case ACTION_TYPES.DELETE_TASK: {
//       const { tasks } = state;

//       const newTasks = tasks.filter((task) => task.id !== action.payload);

//       return {
//         ...state,
//         tasks: newTasks
//       }
//     }
//     default: return state;
//   }
// }

export default taskReducer;