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
type moveType = {
  acc: string | number;
  damage: string;
  name: string;
  power: string | number;
  pp: string | number;
  priority: string | number;
};

const MoveChild: React.FC = () => {
  const { data } = useContext(GenerationContext) as GContext;
  const { params } = useRouteMatch<paramsType>();
  const [moveDesc, setMoveDesc] = useState<moveType>({} as moveType);

  useEffect(() => {
    async function getMove(): Promise<void> {
      const response = await api.get(`move/${params.id}/`);
      if (response && response.data) {
        setMoveDesc({
          name: response.data.name,
          acc: response.data.accuracy || 'Unknown',
          damage: response.data.damage_class.name,
          power: response.data.power || 'Unknown',
          pp: response.data.pp || 'Unknown',
          priority: response.data.priority || 'Unknown',
        });
      }
    }
    getMove();
  }, [params.id]);

  return (
    <>
      <Header title="Move" subtitle={data.name} goBackLink="/moves" />
      {moveDesc && (
        <DescriptiveCard name="" description="">
          <strong>Name</strong>
          <p>{moveDesc.name}</p>
          <br />
          <strong>Accuracy</strong>
          <p>{moveDesc.acc}</p>
          <br />
          <strong>Damage Class</strong>
          <p>{moveDesc.damage}</p>
          <br />
          <strong>Power</strong>
          <p>{moveDesc.power}</p>
          <br />
          <strong>PP</strong>
          <p>{moveDesc.pp}</p>
          <br />
          <strong>Priority</strong>
          <p>{moveDesc.priority}</p>
        </DescriptiveCard>
      )}
    </>
  );
};
export default MoveChild;
