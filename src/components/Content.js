import React from 'react';
import { Route, Switch } from 'react-router-dom';
import NewTask from './NewTask';
import About from './About';
import Error from './Error';

import TaskItem from './Tasks/TaskItem';

const Content = () => {
  return (
    <main className="content">

      <div className="content__container">
        <Switch>
          <Route exact path='/' component={NewTask} />
          <Route path='/todo' component={TaskItem} />
          <Route path='/about' component={About} />
          <Route component={Error} />
        </Switch>
      </div>

    </main>
  );
}

export default Content;