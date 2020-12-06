import React, { useContext } from 'react';
import { Header } from '../../components/Header';
import { GenerationContext } from '../../context/GenerationContext';

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

const MainRegion: React.FC = () => {
  const { data } = useContext(GenerationContext) as GContext;

  return (
    <>
      <Header title="Main Region" subtitle={data.name} />
      <h1>main region</h1>
    </>
  );
};

export default MainRegion;
