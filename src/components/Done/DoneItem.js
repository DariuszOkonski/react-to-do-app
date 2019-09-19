import React from 'react';
import PropTypes from 'prop-types';


const DoneItem = ({ id, task, deadline, doneAt, onStore, onRemove }) => {
  return (
    <div className="single-done">
      <p className="single-done__issue">
        {task} - (done till - {deadline})
        </p>
      <p className="single-done__deadline">
        Done at: {doneAt}
      </p>

      <button
        className="btn"
        onClick={() => onStore(id)}
      >Store</button>

      <button
        className="btn"
        onClick={() => onRemove(id)}
      >Remove</button>
    </div >
  );
}

DoneItem.propTypes = {
  id: PropTypes.number.isRequired,
  task: PropTypes.string.isRequired,
  deadline: PropTypes.string.isRequired,
  doneAt: PropTypes.string,
  onStore: PropTypes.func.isRequired,
  onRemove: PropTypes.func.isRequired,
}


export default DoneItem;