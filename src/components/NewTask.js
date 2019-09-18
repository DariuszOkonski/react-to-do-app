import React from 'react';

const minDate = new Date().toISOString().substr(0, 10);
const maxDate = new Date().getFullYear() + 2 + '-12-31';

class NewTask extends React.Component {
  state = {
    text: '',
    priority: false,
    date: minDate,
  }

  handleTextChange = (e) => {
    this.setState({
      text: e.target.value,
    })
  }

  handlePriorityChange = () => {
    this.setState(prevState => ({
      priority: !prevState.priority,
    }))
  }

  handleDataChange = (e) => {
    this.setState({
      date: e.target.value,
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();

    if (this.state.text.length === 0) {
      alert('Insert some task to do...');
      return;
    }

    if (this.state.date.length === 0) {
      alert('Choose deadline date...');
      return;
    }

    this.props.onHandleAddNewTask(this.state);

    this.setState({
      text: '',
      priority: false,
      date: minDate,
    });

    alert('Task has been added...');
  }


  render() {
    const { text, priority, date } = this.state;

    return (
      <div className="new-task">
        <h1 className="new-task__header">New task</h1>

        <form onSubmit={this.handleSubmit} className="new-task__form form">
          <label htmlFor="task" className="form__label">Task</label>
          <input
            maxLength="100"
            type="text"
            name="task"
            className="form__input"
            value={text}
            onChange={this.handleTextChange}
          />

          <label htmlFor="priority" className="form__label">Priority</label>
          <input
            type="checkbox"
            name="priority"
            className="form__checkbox"
            checked={priority}
            onChange={this.handlePriorityChange}
          />

          <label htmlFor="deadline" className="form__label">Deadline</label>
          <input
            type="date"
            name="deadline"
            className="form__number"
            min={minDate}
            max={maxDate}
            value={date}
            onChange={this.handleDataChange}
          />

          <input type="submit" value="Add New Task" className="form__submit" />
        </form>
      </div>
    );
  }


}

export default NewTask;