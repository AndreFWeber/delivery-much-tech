import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Dashboard from '../pages/Dashboard';
import Abilities from '../pages/Abilities';

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route path="/" exact component={Dashboard} />
      <Route path="/abilities/" exact component={Abilities} />
      <Route path="/ability/:id" exact component={Abilities} />
    </Switch>
  );
};

export default Routes;
