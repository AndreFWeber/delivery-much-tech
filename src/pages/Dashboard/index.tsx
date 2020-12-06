/* eslint-disable radix */
/* eslint-disable array-callback-return */
import React, { useState, useEffect, useContext, useCallback } from 'react';
import { CgPokemon } from 'react-icons/cg';
import {
  GiBirdClaw,
  GiValley,
  GiRunningNinja,
  GiSpill,
  GiChoice,
} from 'react-icons/gi';
import * as ReactIcons from 'react-icons/all';
import api from '../../services/api';
import { GenerationContext } from '../../context/GenerationContext';
import { Header, Deck, GenCard, Decko } from './styles';

/*
move -> GiRunningNinja
abili -> GiBirdClaw, GiTopPaw, GiTightrope
GiValley, GiTrail
version GiChoice
*/
interface Generation {
  name: string;
  url: string;
}

type GetIconProps = {
  icon: keyof typeof ReactIcons;
};

const Dashboard: React.FC = () => {
  const menuCards: { [key: string]: any } = {
    abilities: 'Abilities',
    main_region: 'Main Region',
    moves: 'Moves',
    pokemon_species: 'Pokemons',
    types: 'Types',
    version_groups: 'Version Groups',
  };
  const menuIcons: { [key: string]: any } = {
    abilities: 'GiBirdClaw',
    main_region: 'GiValley',
    moves: 'GiRunningNinja',
    pokemon_species: 'CgPokemon',
    types: 'GiSpill',
    version_groups: 'GiChoice',
  };
  const [genCards, setGenCards] = useState<Generation[]>([]);
  const { name, data, getGeneration } = useContext(GenerationContext);
  const [activeCard, setActiveCard] = useState<Generation>({
    name: '',
    url: '',
  });

  const activateCard = useCallback(
    card => {
      getGeneration(parseInt(card.url.split('generation/')[1]));
      setActiveCard(card);
    },
    [getGeneration],
  );
  /*
  const getIcon = ({ icon }: GetIconProps): any => {
    const TagName = ReactIcons[icon];
    return <TagName />;
  };
*/

  useEffect(() => {
    async function getGenerations(): Promise<void> {
      const response = await api.get('generation');
      if (response && response.data && response.data.results) {
        const card: Generation = response.data.results[0];
        activateCard(card);
        setGenCards([...response.data.results]);
      }
    }
    getGenerations();
  }, [activateCard]);

  return (
    <>
      <Header>Pokemón Games</Header>
      <Deck>
        {genCards.map(card => {
          return (
            <GenCard
              key={card.name}
              active={activeCard.name === card.name}
              onClick={() => {
                activateCard(card);
              }}
            >
              <p>Generation</p>
              <h2>{card.name.split('-')[1].toUpperCase() || card.name}</h2>
            </GenCard>
          );
        })}
      </Deck>
      <Decko>
        {data &&
          Object.entries(data).map(card => {
            if (
              (card[1] instanceof Array && card[1].length === 0) ||
              card[0] === 'name' ||
              card[0] === 'names' ||
              card[0] === 'id'
            ) {
              return <></>;
            }
            console.log('TESTE::::', card[0]);
            const icon = React.createElement(menuIcons[card[0]]);

            return (
              <GenCard
                key={card[0]}
                active={activeCard.name === ''}
                onClick={e => {
                  console.log('card');
                }}
              >
                <p>{menuCards[card[0]]}</p>
              </GenCard>
            );
          })}
      </Decko>
    </>
  );
};
/*
            <GiBirdClaw/>
            <GiValley/>
            <GiRunningNinja/>
            <GiSpill/>
            <GiChoice/>



*/
export default Dashboard;
