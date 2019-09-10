import React from 'react';
import { Route, Switch } from 'react-router-dom';
import About from './About';
import Error from './Error';

const Content = () => {
  return (
    <main className="content">

      <div className="content__container">
        <Switch>
          <Route path='/about' component={About} />
          <Route component={Error} />
        </Switch>
      </div>

    </main>
  );
}

export default Content;