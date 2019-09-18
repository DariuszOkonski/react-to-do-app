import React from 'react';

const TaskItem = ({ id, task, priority, deadline, onRemove }) => {
  const redStyle = {
    color: 'red'
  }

  return (
    <div className="single-task">
      <p style={priority ? redStyle : {}} className="single-task__issue">{task}</p>
      <p className="single-task__deadline">Deadline: {deadline}</p>
      <button className="btn">Done</button>

      <button
        className="btn"
        onClick={() => onRemove(id)}
      >Remove</button>
    </div>
  );
}

export default TaskItem;