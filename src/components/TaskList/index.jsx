import React from 'react';
import { connect } from 'react-redux';
import Task from '../Task';
import TaskCreator from '../TaskCreator';

const TaskList = (props) => {
  const { tasks } = props;

  const taskList = tasks.map((task) => <Task key={task.id} task={task} />);

  return (
    <div>
      <h2>Task List</h2>
      <TaskCreator />
      <ul>{taskList}</ul>
    </div>
  );
};

const mStP = (state) => ({
  tasks: state.task.tasks,
});

export default connect(mStP)(TaskList);
