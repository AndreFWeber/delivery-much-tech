import React, { useState, useEffect, useContext } from 'react';
import api from '../../services/api';
import { GenerationContext } from '../../context/GenerationContext';
import { Header, Deck, GenCard, Decko } from './styles';

interface Generation {
  name: string,
  url: string
}
/*
interface ActiveCard {
  generation : Generation,
  info : {
    id: number,
    abilities: [],
    main_region: {
      name: string
    },  
  }
}
*/
const Dashboard: React.FC = () => {
  const [genCards, setGenCards] = useState<Generation[]>([]);
  const {name , data, getGeneration} = useContext(GenerationContext);
  const [activeCard, setActiveCard] = useState<Generation>({
    name: '',
    url: ''
  })
  
  function activeteCard(): void {
  
  }

  async function getGenerations(): Promise<void> {
    const response = await api.get('generation');    
    if(response && response.data && response.data.results) {
      const card = response.data.results[0];
      getGeneration(parseInt(card.url.split('generation/')[1]));
      setActiveCard(card);
      setGenCards([...genCards, ...response.data.results]);
    }
  }

  useEffect(()=>{   
    getGenerations();
  }, []);

  useEffect(()=>{
    console.log(`aqyu ${name}`);
  }, [name]);

  return (
    <>
      <Header>Pokemón Games</Header>
        <Deck>
          {genCards.map(card => 
            <GenCard 
              key={card.name}
              active={activeCard.name === card.name}
              onClick={(e)=>{console.log(e)}}
            >
              <p>Generation</p>
              <h2>{card.name.split('-')[1].toUpperCase() || card.name}</h2>              
            </GenCard>              
          )}
        </Deck>
    </>);
};

export default Dashboard;
