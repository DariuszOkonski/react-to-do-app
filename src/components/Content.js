import React from 'react';
import { Route, Switch } from 'react-router-dom';
import NewTask from './NewTask';
import About from './About';
import Error from './Error';

import TaskList from './Tasks/TaskList';
import DoneList from './Done/DoneList';
import RemovedList from './Removed/RemovedList';

const Content = () => {
  return (
    <main className="content">

      <div className="content__container">
        <Switch>
          <Route exact path='/' component={NewTask} />
          <Route path='/todo' component={TaskList} />
          <Route path='/done' component={DoneList} />
          <Route path='/removed' component={RemovedList} />
          <Route path='/about' component={About} />
          <Route component={Error} />
        </Switch>
      </div>

    </main>
  );
}

export default Content;