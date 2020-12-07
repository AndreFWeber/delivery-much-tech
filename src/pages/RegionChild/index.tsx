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
type locationType = {
  areas_quantity: number;
  name: string;
  region: string;
};

const RegionChild: React.FC = () => {
  const { data } = useContext(GenerationContext) as GContext;
  const { params } = useRouteMatch<paramsType>();
  const [locationDesc, setLocationDesc] = useState<locationType>(
    {} as locationType,
  );

  useEffect(() => {
    async function getLocation(): Promise<void> {
      const response = await api.get(`location/${params.id}/`);
      if (response && response.data) {
        setLocationDesc({
          name: response.data.name,
          areas_quantity: response.data.name.areas
            ? response.data.name.areas.length
            : 0,
          region: response.data.region.name,
        });
      }
    }
    getLocation();
  }, [params.id]);

  return (
    <>
      <Header title="Location" subtitle={data.name} goBackLink="/main_region" />
      {locationDesc && (
        <DescriptiveCard name="" description="">
          <strong>Name</strong>
          <p>{locationDesc.name}</p>
          <br />
          <strong>Region</strong>
          <p>{locationDesc.region}</p>
          <br />
          <strong>Quantity of Areas</strong>
          <p>{locationDesc.areas_quantity}</p>
          <br />
        </DescriptiveCard>
      )}
    </>
  );
};
export default RegionChild;
