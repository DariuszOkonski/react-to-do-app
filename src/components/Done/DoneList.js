import React from 'react';
import DoneItem from './DoneItem';

const DoneList = ({ doneArr }) => {
  return (
    <div className="done-item">
      <h1 className="done-item__header">{`Done Tasks (${doneArr.length})`}</h1>

      {doneArr.map(task => <DoneItem key={task.id} {...task} />)}

    </div>
  );
}

export default DoneList;