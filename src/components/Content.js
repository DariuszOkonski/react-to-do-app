import React, { Component } from 'react';
import uuid from 'uuid';
import { Route, Switch } from 'react-router-dom';
import NewTask from './NewTask';
import About from './About';
import Error from './Error';

import TaskList from './Tasks/TaskList';
import DoneList from './Done/DoneList';
import RemovedList from './Removed/RemovedList';

class Content extends Component {
  state = {
    tasksArr: [

    ],
    doneArr: [
      { id: 1, task: 'clean a car', priority: false, deadline: '18.02.2019', doneAt: null },
      { id: 2, task: 'make shopping', priority: false, deadline: '14.03.2019', doneAt: null },
      { id: 3, task: 'walk a dog', priority: true, deadline: '23.04.2019', doneAt: null },
      { id: 4, task: 'go to a party', priority: true, deadline: '22.03.2019', doneAt: null },
      { id: 5, task: 'go sleep early', priority: false, deadline: '13.12.2019', doneAt: null },
    ],
    removedArr: [],
  }

  handleAddNewTask = (newTaskState) => {
    const newTask = {
      id: uuid(),
      task: newTaskState.text,
      priority: newTaskState.priority,
      deadline: newTaskState.date,
      doneAt: null
    }

    const tasksArr = [...this.state.tasksArr, newTask];

    this.setState({
      tasksArr,
    })
  }

  handleRemoveFromTasks = (id) => {
    let tasksArr = [...this.state.tasksArr];

    tasksArr = tasksArr.filter(task => task.id !== id);

    this.setState({
      tasksArr
    })
  }

  handleMoveFromTasksToDone = (id) => {
    const tasksArr = [...this.state.tasksArr];
    const index = tasksArr.findIndex(task => task.id === id);
    const removedTask = tasksArr.splice(index, 1);

    let removedTaskWithDoneAt = { ...removedTask[0] };
    removedTaskWithDoneAt.doneAt = new Date().toISOString().substr(0, 10) + ' - ' + new Date().toISOString().substr(11, 8);

    console.log(removedTaskWithDoneAt);

    const doneArr = [...this.state.doneArr, removedTaskWithDoneAt];

    this.setState({
      tasksArr,
      doneArr,
    })
  }

  render() {
    const { tasksArr, doneArr, removedArr } = this.state;
    return (
      <main className="content">

        <div className="content__container">
          <Switch>
            <Route exact path='/' render={() =>
              (<NewTask onHandleAddNewTask={this.handleAddNewTask} />)}
            />

            <Route path='/todo' render={(props) =>
              (<TaskList
                tasksArr={tasksArr}
                onHandleRemoveFromTasks={this.handleRemoveFromTasks}
                onHandleMoveFromTasksToDone={this.handleMoveFromTasksToDone}
              />)}
            />

            <Route path='/done' render={() => (
              <DoneList
                doneArr={doneArr}
              />)}
            />

            <Route path='/removed' component={RemovedList} />
            <Route path='/about' component={About} />
            <Route component={Error} />
          </Switch>
        </div>

      </main>
    );
  }

}

export default Content;