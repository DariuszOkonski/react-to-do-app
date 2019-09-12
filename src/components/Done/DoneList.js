import React from 'react';
import DoneItem from './DoneItem';

const DoneList = () => {
  return (
    <div className="done-item">
      <h1 className="done-item__header">Done Tasks (3)</h1>

      <DoneItem />

    </div>
  );
}

export default DoneList;