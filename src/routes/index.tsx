import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Dashboard from '../pages/Dashboard';
import Abilities from '../pages/Abilities';
import Ability from '../pages/AbilityChild';
import MainRegion from '../pages/MainRegion';
import RegionChild from '../pages/RegionChild';
import Moves from '../pages/Moves';
import MoveChild from '../pages/MoveChild';
import Pokemons from '../pages/Pokemons';
import PokemonChild from '../pages/PokemonChild';

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route path="/" exact component={Dashboard} />
      <Route path="/abilities/" exact component={Abilities} />
      <Route path="/main_region/" component={MainRegion} />
      <Route path="/moves/" exact component={Moves} />
      <Route path="/pokemon_species/" exact component={Pokemons} />
      <Route path="/ability/:id" exact component={Ability} />
      <Route path="/move/:id" exact component={MoveChild} />
      <Route path="/location/:id" exact component={RegionChild} />
      <Route path="/pokemon-species/:id" exact component={PokemonChild} />
    </Switch>
  );
};

export default Routes;
