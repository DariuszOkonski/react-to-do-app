import React from 'react';
import RemovedItem from './RemovedItem';

const RemovedList = () => {
  return (
    <div className="removed-item">
      <h1 className="removed-item__header">Removed Tasks (3)</h1>
      <button className="btn">Remove All</button>

      <RemovedItem />

    </div>
  );
}

export default RemovedList;