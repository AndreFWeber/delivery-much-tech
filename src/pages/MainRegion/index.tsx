import React, { useContext, useEffect, useState } from 'react';
import { Header } from '../../components/Header';
import api from '../../services/api';
import { GenerationContext } from '../../context/GenerationContext';
import { Pokeball } from '../../components/Pokeball';
import { RegionName } from './styles';

interface GContext {
  data: {
    name: string;
    main_region: {
      name: string;
      url: string;
    };
  };
  getGeneration(id: number): Promise<void>;
}

type Location = {
  name: string;
  url: string;
};

const MainRegion: React.FC = () => {
  const { data } = useContext(GenerationContext) as GContext;
  const [name, setName] = useState('');
  const [locations, setLocations] = useState<[Location]>([
    {
      name: '',
      url: '',
    },
  ]);

  useEffect(() => {
    async function getGenerations(): Promise<void> {
      const region = data.main_region.url.split('v2/')[1];
      const response = await api.get(region);
      if (response && response.data) {
        setName(response.data.name);
        setLocations([...(response.data.locations as [Location])]);
      }
    }
    getGenerations();
  }, [data]);

  return (
    <>
      <Header title="Main Region" subtitle={data.name} goBackLink="/" />
      <RegionName>{name}</RegionName>
      {data && <Pokeball data={locations} item="pokemon-species" />}
    </>
  );
};

export default MainRegion;
