import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Dashboard from '../pages/Dashboard';
import Abilities from '../pages/Abilities';
import Ability from '../pages/Ability';
import MainRegion from '../pages/MainRegion';
import Moves from '../pages/Moves';
import Pokemons from '../pages/Pokemons';
import Types from '../pages/Types';
import VersionGroups from '../pages/VersionGroups';

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route path="/" exact component={Dashboard} />
      <Route path="/abilities/" exact component={Abilities} />
      <Route path="/main_region/" exact component={MainRegion} />
      <Route path="/moves/" exact component={Moves} />
      <Route path="/pokemon_species/" exact component={Pokemons} />
      <Route path="/types/" exact component={Types} />
      <Route path="/version_groups/" exact component={VersionGroups} />
      <Route path="/ability/:id" exact component={Ability} />
    </Switch>
  );
};

export default Routes;
