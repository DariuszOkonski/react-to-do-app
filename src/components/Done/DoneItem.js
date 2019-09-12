import React from 'react';

const DoneItem = () => {
  return (
    <div className="single-done">
      <p className="single-done__issue">
        Go to hairdresser - (done till - 20/02/2019)
        </p>
      <p className="single-done__deadline">
        Done at: 18/02/2020 - 10.49.23
        </p>
      <button className="btn">Store</button>
      <button className="btn">Remove</button>
    </div>
  );
}

export default DoneItem;