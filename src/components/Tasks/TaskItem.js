import React from 'react';

const TaskItem = () => {
  return (
    <div className="task-item">
      <h1 className="task-item__header">Tasks To Do (3)</h1>

      <div className="single-task">
        <p className="single-task__issue">I have to paint kitchen</p>
        <p className="single-task__deadline">Deadline: 18/02/2020</p>
        <button className="btn">Done</button>
        <button className="btn">Remove</button>
      </div>

    </div>
  );
}

export default TaskItem;