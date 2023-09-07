import React, { useState } from 'react';
import { connect } from 'react-redux';
import * as TasksActionCreators from '../../redux/actions/tasksActionCreators';

const TaskList = (props) => {
  const { tasks, dispatch } = props;

  const [taskText, setTaskText] = useState('');

  const submitHandler = (e) => {
    e.preventDefault();

    dispatch(TasksActionCreators.createTask(taskText));
  };

  const changeTaskTextHandler = ({ target: { value } }) => {
    setTaskText(value);
  };

  const taskList = tasks.map((task) => (
    <li key={task.id}>
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
  ));

  return (
    <div>
      <h2>Task List</h2>
      <form onSubmit={submitHandler}>
        <label>
          Enter new task:{' '}
          <input value={taskText} onChange={changeTaskTextHandler} />
        </label>
        <button>Add task</button>
      </form>
      <ul>
        {taskList}
      </ul>
    </div>
  );
};

const mStP = (state) => ({
  tasks: state.tasks,
});

export default connect(mStP)(TaskList);
