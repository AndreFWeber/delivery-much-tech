import styled, { css } from 'styled-components';
import { shade } from 'polished';

interface CardProps {
  active: boolean,
}

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
`;

export const Header = styled.header`
  font: 48px Pokemon, sans-serif;
  text-shadow: 0px 0px 12px #356abc;
  -webkit-text-fill-color: #ffcc03;
  -webkit-text-stroke-color: #356abc;
  -webkit-text-stroke-width: 2px;
  text-align: center;
`;

export const Deck = styled.div`
  padding-top: 10px;
  font: 16px Pokemon, sans-serif;
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
`;

export const Decko = styled(Deck)`
`;

export const Card = styled.a<CardProps>`
  background-color: #ffcc03;
  width: 110px;
  min-height: 160px;
  border-style: solid;
  border-radius:12px;
  border-width: 7px;
  border-color: #356abc;
  box-shadow: 0px 0px 10px 3px #356abc;
  color: white;
  padding: 1rem;
  height: 4rem;
  opacity: 80%;

  ${(props) => props.active && css`
    opacity: 100%;
  `}

  display: flex;
  align-items: center;
  justify-content: center;

  h4 {
    font-size:30px;
  }

  transition: background-color 0.2s;
  &:hover{
    background-color: ${shade(0.2, '#ffcc03')};
    transform: scale(0.98);
  }

  
`;
