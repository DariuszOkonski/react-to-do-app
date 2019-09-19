import React from 'react';
import PropTypes from 'prop-types';

const RemovedItem = ({ id, task, onRemove }) => {
  return (
    <div className="single-removed">
      <p className="single-removed__issue">
        {task}
      </p>

      <button
        className="btn"
        onClick={() => onRemove(id)}
      >Remove</button>
    </div>
  );
}

RemovedItem.propTypes = {
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  task: PropTypes.string.isRequired,
  onRemove: PropTypes.func.isRequired,
}

export default RemovedItem;