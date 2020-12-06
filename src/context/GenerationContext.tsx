import React, { createContext, useCallback, useState } from 'react';
import api from '../services/api';

export const GenerationContext = createContext({
    name: '',
    data: {},
    getGeneration: async (id:number)=>{}
});

export const GenerationProvider: React.FC = ({ children }) => {
    const [generationCard, setGenerationCard] = useState({});
    const [cardName, setCardName] = useState('');

    const getGeneration = useCallback(async (id:number = 1) => {
        const response = await api.get(`generation/${id}/`);       
        setGenerationCard(response.data);
        setCardName(response.data.name);
    }, []);

    return (
        <GenerationContext.Provider value={{name: cardName, data: generationCard, getGeneration}}>
            {children}
        </GenerationContext.Provider>    
    );
}
