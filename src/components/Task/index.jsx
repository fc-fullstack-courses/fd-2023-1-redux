import React from 'react';
import { connect } from 'react-redux';
import * as TasksActionCreators from '../../redux/actions/tasksActionCreators';

const Task = ({ task, dispatch }) => {
  return (
    <li>
      <input
        type='checkbox'
        checked={task.isDone}
        onChange={() => {
          dispatch(
            TasksActionCreators.updateTask({
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
          dispatch(TasksActionCreators.deleteTask(task.id));
        }}
      >
        Delete task
      </button>
    </li>
  );
};

const mStP = (state) => ({});

export default connect(mStP)(Task);
