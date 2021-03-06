/* eslint-disable radix */
/* eslint-disable array-callback-return */
import React, {
  useState,
  useEffect,
  useContext,
  useCallback,
  ReactElement,
} from 'react';
import { CgPokemon } from 'react-icons/cg';
import {
  GiBirdClaw,
  GiTrail,
  GiRunningNinja,
  GiMightyForce,
  GiStack,
  GiGiantSquid,
} from 'react-icons/gi';
import api from '../../services/api';
import { Header } from '../../components/Header';
import { GenerationContext } from '../../context/GenerationContext';
import { Deck, GenCard, Decko, Linker } from './styles';

interface Generation {
  name: string;
  url: string;
}

const Dashboard: React.FC = () => {
  const menuCards: { [key: string]: any } = {
    abilities: 'Abilities',
    main_region: 'Main Region',
    moves: 'Moves',
    pokemon_species: 'Pokemons',
    types: 'Types',
    version_groups: 'Version Groups',
  };

  const [genCards, setGenCards] = useState<Generation[]>([]);
  const { data, getGeneration } = useContext(GenerationContext);

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

  const getIcon = (choice: string): ReactElement => {
    let a = null;
    switch (choice) {
      case 'abilities': {
        a = GiBirdClaw;
        break;
      }
      case 'main_region': {
        a = GiTrail;
        break;
      }
      case 'moves': {
        a = GiRunningNinja;
        break;
      }
      case 'pokemon_species': {
        a = CgPokemon;
        break;
      }
      case 'types': {
        a = GiMightyForce;
        break;
      }
      case 'version_groups': {
        a = GiStack;
        break;
      }
      default: {
        a = GiGiantSquid;
        break;
      }
    }

    const icon = React.createElement(a);
    return <div style={{ fontSize: 40 }}>{icon}</div>;
  };

  useEffect(() => {
    async function getGenerations(): Promise<void> {
      const response = await api.get('generation');
      if (response && response.data && response.data) {
        const card: Generation = response.data.results[0];
        activateCard(card);
        setGenCards([...response.data.results]);
      }
    }
    getGenerations();
  }, [activateCard]);

  return (
    <>
      <Header title="Pokemon Games" subtitle="" goBackLink="" />
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
              card[0] === 'types' ||
              card[0] === 'version_groups' ||
              card[0] === 'id'
            ) {
              return <></>;
            }

            return (
              <Linker key={card[0]} to={`/${card[0]}`}>
                <p>{menuCards[card[0]]}</p>
                {getIcon(card[0])}
              </Linker>
            );
          })}
      </Decko>
    </>
  );
};

export default Dashboard;
