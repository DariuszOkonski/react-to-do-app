import React from 'react';
import RemovedItem from './RemovedItem';
import PropTypes from 'prop-types';

const RemovedList = ({ removedArr, onHandleRemoveTaskFromRemoved, onHandleRemoveAllFromRemoved }) => {
  return (
    <div className="removed-item">
      <h1 className="removed-item__header">{`Removed Tasks (${removedArr.length})`}</h1>
      <button
        className="btn"
        onClick={onHandleRemoveAllFromRemoved}
      >Remove All</button>

      {removedArr.map(task =>
        <RemovedItem
          key={task.id}
          {...task}
          onRemove={onHandleRemoveTaskFromRemoved}
        />)}

    </div>
  );
}

RemovedList.propTypes = {
  removedArr: PropTypes.array.isRequired,
  onHandleRemoveTaskFromRemoved: PropTypes.func.isRequired,
  onHandleRemoveAllFromRemoved: PropTypes.func.isRequired,
}

export default RemovedList;