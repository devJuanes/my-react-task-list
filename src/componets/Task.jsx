// Task.jsx
import React from 'react';

const Task = ({ name, status }) => {
  return (
    <li>
      {name} - {status ? 'Completed' : 'Incomplete'}
    </li>
  );
}

export default Task;
