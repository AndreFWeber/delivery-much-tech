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
type Effects = {
  effect: string;
  language: {
    name: string;
  };
};

const Ability: React.FC = () => {
  const { data } = useContext(GenerationContext) as GContext;
  const { params } = useRouteMatch<paramsType>();
  const [effects, setEffects] = useState<Effects>({} as Effects);
  const [name, setName] = useState('');

  useEffect(() => {
    async function getAbility(): Promise<void> {
      const response = await api.get(`ability/${params.id}/`);
      if (response && response.data) {
        const a = response.data.effect_entries.filter((effect: Effects) => {
          if (effect.language.name === 'en') {
            return effect;
          }
          return false;
        });
        if (a.length) {
          setEffects(a[0]);
          setName(response.data.name);
        }
      }
    }
    getAbility();
  }, [params.id]);

  return (
    <>
      <Header title="Ability" subtitle={data.name} goBackLink="/abilities" />
      {effects && <DescriptiveCard name={name} description={effects.effect} />}
    </>
  );
};

export default Ability;
