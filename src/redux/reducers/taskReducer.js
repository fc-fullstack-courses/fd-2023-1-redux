import ACTION_TYPES from "../actions/actionTypes";

const initialState = {
  tasks: []
}

function taskReducer (state = initialState, action) {
  switch(action.type) {
    case ACTION_TYPES.ADD_TASK: {
      const newTask = {
        id: Date.now(),
        body: action.payload,
        isDone: false
      }

      const newTasks = [...state.tasks, newTask];

      return {
        ...state,
        tasks: newTasks
      }
    }
    case ACTION_TYPES.UPDATE_TASK: {
      const { id, newValues } = action.payload;
      const { tasks } = state;

      const newTasks = [...tasks];

      const taskIndex = newTasks.findIndex((task, index) => id === task.id);

      const taskToUpdate = newTasks[taskIndex];

      const updatedTask = { ...taskToUpdate, ...newValues };

      newTasks[taskIndex] = updatedTask;

      return {
        ...state,
        tasks: newTasks
      }

    }
    case ACTION_TYPES.DELETE_TASK: {
      const { tasks } = state;

      const newTasks = tasks.filter((task) => task.id !== action.payload);

      return {
        ...state,
        tasks: newTasks
      }
    }
    default : return state;
  }
}

export default taskReducer;