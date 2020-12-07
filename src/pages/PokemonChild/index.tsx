import React, { useContext, useEffect, useState } from 'react';
import { useRouteMatch } from 'react-router-dom';
import { Header } from '../../components/Header';
import { GenerationContext } from '../../context/GenerationContext';
import api from '../../services/api';
import { DescriptiveCard } from '../../components/DescriptiveCard';

interface paramsType {
  id: string;
}
interface GContext {
  data: {
    name: string;
  };
}
type pokemonType = {
  base_happiness: number;
  capture_rate: number;
  color: string;
  name: string;
  shape: string;
};

const PokemonChild: React.FC = () => {
  const { data } = useContext(GenerationContext) as GContext;
  const { params } = useRouteMatch<paramsType>();
  const [pokemonDesc, setPokemonDesc] = useState<pokemonType>(
    {} as pokemonType,
  );

  useEffect(() => {
    async function getPokemon(): Promise<void> {
      const response = await api.get(`pokemon-species/${params.id}/`);
      if (response && response.data) {
        setPokemonDesc({
          base_happiness: response.data.base_happiness,
          capture_rate: response.data.capture_rate,
          name: response.data.name,
          color: response.data.color.name,
          shape: response.data.shape.name,
        });
      }
    }
    getPokemon();
  }, [params.id]);

  return (
    <>
      <Header
        title="Pokemon"
        subtitle={data.name}
        goBackLink="/pokemon_species"
      />
      {pokemonDesc && (
        <DescriptiveCard name="" description="">
          <strong>Name</strong>
          <p>{pokemonDesc.name}</p>
          <br />
          <strong>Base Happiness</strong>
          <p>{pokemonDesc.base_happiness}</p>
          <br />
          <strong>Capture Rate</strong>
          <p>{pokemonDesc.capture_rate}</p>
          <br />
          <strong>Color</strong>
          <p>{pokemonDesc.color}</p>
          <br />
          <strong>Shape</strong>
          <p>{pokemonDesc.shape}</p>
          <br />
        </DescriptiveCard>
      )}
    </>
  );
};
export default PokemonChild;
