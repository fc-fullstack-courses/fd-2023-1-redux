import React, { useState } from 'react';
import { connect } from 'react-redux';
import * as TasksActionCreators from '../../redux/actions/tasksActionCreators';

const TaskCreator = ({ createTask }) => {
  const [taskText, setTaskText] = useState('');

  const submitHandler = (e) => {
    e.preventDefault();

    createTask(taskText);

    setTaskText('');
  };

  const changeTaskTextHandler = ({ target: { value } }) => {
    setTaskText(value);
  };

  return (
    <form onSubmit={submitHandler}>
      <label>
        Enter new task:{' '}
        <input value={taskText} onChange={changeTaskTextHandler} />
      </label>
      <button type='submit'>Add task</button>
    </form>
  );
};

const mDtP = (dispatch) => {
  return {
    createTask: (taskText) =>
      dispatch(TasksActionCreators.createTask(taskText)),
  };
};

export default connect(null, mDtP)(TaskCreator);
