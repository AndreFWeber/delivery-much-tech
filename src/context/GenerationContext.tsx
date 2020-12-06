/* eslint-disable react/prop-types */
import React, { createContext, useCallback, useState } from 'react';
import api from '../services/api';

interface GContext {
  data: object;
  getGeneration(id: number): Promise<void>;
}

export const GenerationContext = createContext({} as GContext);

export const GenerationProvider: React.FC = ({ children }) => {
  const [generationCard, setGenerationCard] = useState(() => {
    const cards = localStorage.getItem('@pokemon-much:data');
    if (cards) {
      return JSON.parse(cards);
    }
    return {} as GContext;
  });

  const getGeneration = useCallback(async (id = 1) => {
    const response = await api.get(`generation/${id}/`);

    setGenerationCard(response.data);
    localStorage.setItem('@pokemon-much:data', JSON.stringify(response.data));
  }, []);

  return (
    <GenerationContext.Provider value={{ data: generationCard, getGeneration }}>
      {children}
    </GenerationContext.Provider>
  );
};
