import React from 'react';

const RemovedList = () => {
  return (
    <div className="removed-item">
      <h1 className="removed-item__header">Removed Tasks (3)</h1>

      <div className="single-removed">
        <p className="single-removed__issue">
          Go to hairdresser
        </p>
        <button className="btn">Remove</button>
      </div>

    </div>
  );
}

export default RemovedList;