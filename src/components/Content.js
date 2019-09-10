import React from 'react';
import { Route, Switch } from 'react-router-dom';
import About from './About';

const Content = () => {
  return (
    <main className="content">

      <div className="content__container">
        <Switch>
          <Route path='/about' component={About} />
        </Switch>
      </div>

    </main>
  );
}

export default Content;