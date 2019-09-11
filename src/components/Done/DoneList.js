import React from 'react';

const DoneList = () => {
  return (
    <div className="done-item">
      <h1 className="done-item__header">Done Tasks (3)</h1>

      <div className="single-done">
        <p className="single-done__issue">
          Go to hairdresser - (done till - 20/02/2019)
        </p>
        <p className="single-done__deadline">
          Done at: 18/02/2020 - 10.49.23
        </p>
        <button className="btn">Remove</button>
      </div>

    </div>
  );
}

export default DoneList;