import React from 'react';
import PropTypes from 'prop-types';
import DoneItem from './DoneItem';

const DoneList = ({ doneArr, onHandleStoreToRemoved }) => {
  return (
    <div className="done-item">
      <h1 className="done-item__header">{`Done Tasks (${doneArr.length})`}</h1>

      {doneArr.map(task => <DoneItem key={task.id} {...task} onStore={onHandleStoreToRemoved} />)}

    </div>
  );
}

DoneList.propTypes = {
  doneArr: PropTypes.array.isRequired,
  onHandleStoreToRemoved: PropTypes.func.isRequired,
}

export default DoneList;