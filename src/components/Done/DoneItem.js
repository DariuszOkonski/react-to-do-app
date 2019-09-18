import React from 'react';

// id: 1, task: 'clean a car', priority: false, deadline: '18.02.2019', doneAt: null

const DoneItem = ({ id, task, deadline, doneAt }) => {
  return (
    <div className="single-done">
      <p className="single-done__issue">
        {task} - (done till - {deadline})
        </p>
      <p className="single-done__deadline">
        Done at: {doneAt}
      </p>

      <button className="btn">Store</button>
      <button className="btn">Remove</button>
    </div>
  );
}

export default DoneItem;