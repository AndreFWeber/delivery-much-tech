import React, { useContext } from 'react';
import { Header } from '../../components/Header';
import { GenerationContext } from '../../context/GenerationContext';
import { Pokeball } from '../../components/Pokeball';

interface GContext {
  data: {
    name: string;
    abilities: [
      {
        name: string;
        url: string;
      },
    ];
    moves: [
      {
        name: string;
        url: string;
      },
    ];
    pokemon_species: [
      {
        name: string;
        url: string;
      },
    ];
    types: [
      {
        name: string;
        url: string;
      },
    ];
    version_groups: [
      {
        name: string;
        url: string;
      },
    ];
  };
  getGeneration(id: number): Promise<void>;
}

const Pokemons: React.FC = () => {
  const { data } = useContext(GenerationContext) as GContext;

  return (
    <>
      <Header title="Pokemons" subtitle={data.name} goBackLink="/" />
      <Pokeball data={data.pokemon_species} item="pokemon-species" />
    </>
  );
};

export default Pokemons;
