import React, { useContext } from 'react';
import { useRouteMatch } from 'react-router-dom';
import { Header } from '../../components/Header';
import { GenerationContext } from '../../context/GenerationContext';

interface paramsType {
  id: string;
}
interface GContext {
  data: {
    name: string;
  };
}
const Ability: React.FC = () => {
  const { data } = useContext(GenerationContext) as GContext;
  const { params } = useRouteMatch<paramsType>();

  return (
    <>
      <Header title="Ability" subtitle={data.name} goBackLink="/abilities" />
      <h1>{params.id}</h1>
    </>
  );
};

export default Ability;
