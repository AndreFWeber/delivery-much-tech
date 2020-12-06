import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import {GenerationProvider} from './context/GenerationContext';
import GlobalStyle from './styles/global';
import Routes from './routes';

const App: React.FC = () => {
  return (
    <>
      <GenerationProvider>
        <BrowserRouter>
          <Routes />
        </BrowserRouter>
      </GenerationProvider>
      <GlobalStyle />
    </>
  );
};

export default App;
