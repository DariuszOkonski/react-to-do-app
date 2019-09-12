import React, { Component } from 'react';
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
      { id: 1, task: 'clean a car', priority: false, deadline: '18.02.2019', doneAt: null },
      { id: 2, task: 'make shopping', priority: false, deadline: '14.03.2019', doneAt: null },
      { id: 3, task: 'walk a dog', priority: true, deadline: '23.04.2019', doneAt: null },
      { id: 4, task: 'go to a party', priority: true, deadline: '22.03.2019', doneAt: null },
      { id: 5, task: 'go sleep early', priority: false, deadline: '13.12.2019', doneAt: null },
    ],
    doneArr: [],
    removedArr: [],
  }

  render() {
    const { tasksArr } = this.state;
    return (
      <main className="content">

        <div className="content__container">
          <Switch>
            <Route exact path='/' component={NewTask} />
            <Route path='/todo' render={(props) => (<TaskList tasksArr={tasksArr} />)} />
            <Route path='/done' component={DoneList} />
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