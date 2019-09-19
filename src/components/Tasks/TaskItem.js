import React from 'react';
import PropTypes from 'prop-types';

const TaskItem = ({ id, task, priority, deadline, onRemove, onDone }) => {
  const redStyle = {
    color: 'red'
  }

  return (
    <div className="single-task">
      <p style={priority ? redStyle : {}} className="single-task__issue">{task}</p>
      <p className="single-task__deadline">Deadline: {deadline}</p>
      <button
        className="btn"
        onClick={() => onDone(id)}
      >Done</button>

      <button
        className="btn"
        onClick={() => onRemove(id)}
      >Remove</button>
    </div>
  );
}

TaskItem.propTypes = {
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  task: PropTypes.string.isRequired,
  priority: PropTypes.bool.isRequired,
  deadline: PropTypes.string.isRequired,
  onRemove: PropTypes.func.isRequired,
  onDone: PropTypes.func.isRequired,
}

export default TaskItem;