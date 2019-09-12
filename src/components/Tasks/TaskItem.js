import React from 'react';

const TaskItem = () => {
  return (
    <div className="single-task">
      <p className="single-task__issue">I have to paint kitchen</p>
      <p className="single-task__deadline">Deadline: 18/02/2020</p>
      <button className="btn">Done</button>
      <button className="btn">Remove</button>
    </div>
  );
}

export default TaskItem;