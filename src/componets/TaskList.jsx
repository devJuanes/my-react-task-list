// TaskList.jsx
import React from 'react';
import Task from './Task';

const TaskList = ({ tasks }) => {
  return (
    <div>
      <h2>Task List</h2>
      <ul>
        {tasks.map((task, index) => (
          <Task key={index} name={task.name} status={task.status} />
        ))}
      </ul>
    </div>
  );
}

export default TaskList;
