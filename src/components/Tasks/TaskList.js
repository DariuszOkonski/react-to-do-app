import React from 'react';
import TaskItem from './TaskItem';
import PropTypes from 'prop-types';

const TaskList = ({ tasksArr }) => {
  return (
    <div className="task-item">
      <h1 className="task-item__header">{`Tasks To Do (${tasksArr.length})`}</h1>

      {tasksArr.map(task => <TaskItem key={task.id} {...task} />)}

    </div>
  );
}

TaskList.propTypes = {
  tasksArr: PropTypes.array.isRequired,
}

export default TaskList;