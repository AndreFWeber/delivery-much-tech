import React, { useState, useEffect, useContext } from 'react';
import api from '../../services/api';
import { GenerationContext } from '../../context/GenerationContext';
import { Header, Deck, GenCard, Decko } from './styles';

interface Generation {
  name: string,
  url: string
}

const Dashboard: React.FC = () => {
  const menuCards:{ [key: string]: any } = {abilities:'Abilities', main_region:'Main Region', moves:'Moves', pokemon_species:'Pokemons', types:'Types', version_groups:'Version Groups'};
  const [genCards, setGenCards] = useState<Generation[]>([]);
  const {name , data, getGeneration} = useContext(GenerationContext);
  const [activeCard, setActiveCard] = useState<Generation>({
    name: '',
    url: ''
  })
  
  function activateCard(card:Generation): void {
    getGeneration(parseInt(card.url.split('generation/')[1]));
    setActiveCard(card);
  }

  async function getGenerations(): Promise<void> {
    const response = await api.get('generation');    
    if(response && response.data && response.data.results) {
      const card:Generation =response.data.results[0];
      activateCard(card);
      setGenCards([...genCards, ...response.data.results]);
    }
  }

  useEffect(()=>{   
    getGenerations();
  }, []);

  useEffect(() => {
    console.log(data)
  }, [data]);

  return (
    <>
      <Header>Pokemón Games</Header>
      <Deck>
        {genCards.map(card => 
          <GenCard 
            key={card.name}
            active={activeCard.name === card.name}
            onClick={(e)=>{activateCard(card)}}>
            <p>Generation</p>
            <h2>{card.name.split('-')[1].toUpperCase() || card.name}</h2>              
          </GenCard>              
        )}
      </Deck>

      <Decko>
        {data && Object.entries(data).map( card =>{
            if(card[1] instanceof Array && card[1].length === 0 ||
              card[0] === 'name' || card[0] === 'names' || card[0] === 'id'){
              return <></>
            }
            console.log(card[0]);
            return <GenCard 
            key={card[0]}
            active={activeCard.name === ''}
            onClick={(e)=>{console.log('card')}}>
            <p>{menuCards[card[0]]}</p>
          </GenCard>
      })}
      </Decko>
    </>);
};

export default Dashboard;
