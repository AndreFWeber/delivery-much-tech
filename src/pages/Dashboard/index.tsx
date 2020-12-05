import React, { useState } from 'react';
import api from '../../services/api';
import { Container, Header, Deck, Card, Decko } from './styles';

const Dashboard: React.FC = () => {
  return (
    <Container>
      <Header>Pokemón Games</Header>
      <div>
        <Deck>
          <Card active={true} ><h4>I</h4></Card>
          <Card active={false} ><h4>II</h4></Card>
          <Card active={false} ><h4>III</h4></Card>
          <Card active={false} ><h4>IV</h4></Card>
          <Card active={false} ><h4>V</h4></Card>
          <Card active={false} ><h4>VI</h4></Card>
          <Card active={false} ><h4>VII</h4></Card>
          <Card active={false} ><h4>VIII</h4></Card>
        </Deck>

        <Decko>
          <Card active={true} ><h4>I</h4></Card>
          <Card active={false} ><h4>II</h4></Card>
          <Card active={false} ><h4>III</h4></Card>
          <Card active={false} ><h4>IV</h4></Card>
          <Card active={false} ><h4>V</h4></Card>
          <Card active={false} ><h4>VI</h4></Card>
          <Card active={false} ><h4>VII</h4></Card>
          <Card active={false} ><h4>VIII</h4></Card>
        </Decko>
      </div>
    </Container>);
};

export default Dashboard;
