import React from 'react';
import TaskItem from './TaskItem';

const TaskList = () => {
  return (
    <div className="task-item">
      <h1 className="task-item__header">Tasks To Do (3)</h1>

      <TaskItem />

    </div>
  );
}

export default TaskList;