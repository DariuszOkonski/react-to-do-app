import React from 'react';

const NewTask = () => {
  return (
    <div className="new-task">
      <h1 className="new-task__header">New task</h1>

      <form className="new-task__form form">
        <label htmlFor="task" className="form__label">Task</label>
        <input type="text" name="task" className="form__input" />

        <label htmlFor="priority" className="form__label">Priority</label>
        <input type="checkbox" name="priority" className="form__checkbox" />

        <label htmlFor="deadline" className="form__label">Deadline</label>
        <input type="number" name="deadline" className="form__number" />

        <input type="submit" value="Add New Task" className="form__submit" />
      </form>
    </div>
  );
}

export default NewTask;