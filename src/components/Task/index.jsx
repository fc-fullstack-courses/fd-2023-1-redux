import React from 'react';
import { connect } from 'react-redux';
import { updateTask, deleteTask } from '../../redux/slices/taskSlice';

const Task = ({ task, dispatch }) => {
  return (
    <li>
      <input
        type='checkbox'
        checked={task.isDone}
        onChange={() => {
          dispatch(
            updateTask({
              id: task.id,
              newValues: {
                isDone: !task.isDone,
              },
            })
          );
        }}
      />
      <span>{task.body}</span>
      <button
        onClick={() => {
          dispatch(deleteTask(task.id));
        }}
      >
        Delete task
      </button>
    </li>
  );
};

const mStP = (state) => ({});

export default connect(mStP)(Task);
