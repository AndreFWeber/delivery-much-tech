import styled, { css } from 'styled-components';
import { shade } from 'polished';
import { Link } from 'react-router-dom';

interface CardProps {
  active: boolean;
}

export const Linker = styled(Link).attrs(({ to }) => ({
  to,
}))`
  border-style: solid;
  color: white;
  padding: 1rem;
  height: 4rem;

  display: flex;
  align-items: center;
  flex-direction: column;

  cursor: pointer;

  border-radius: 50%;
  width: 130px;
  min-height: 130px;
  justify-content: center;
  opacity: 100%;
  border-width: 1px;
  border-color: black;
  box-shadow: 0px 0px 10px 3px black;

  transition: transform 0.2s;
  &:hover {
    transform: rotate(15deg);
  }

  background: linear-gradient(
    to bottom,
    #ad1515 45%,
    #000000c9 5%,
    #000000c9 50%,
    #d4cbcb 50%
  );
  p {
    text-align: center;
  }
`;

export const Deck = styled.div`
  font: 16px Pokemon, sans-serif;
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
  justify-items: center;

  position: relative;
  top: calc(45% - 230px - 20px);
`;

export const Decko = styled(Deck)`
  position: relative;
  top: calc(50% - 230px + 20px);
  grid-template-rows: repeat(auto-fit, minmax(130px, 1fr));
  grid-template-columns: repeat(auto-fit, minmax(130px, 1fr));
`;

export const GenCard = styled.a<CardProps>`
  background-color: #ffcc03;
  width: 110px;
  min-height: 160px;
  border-style: solid;
  border-radius: 12px;
  border-width: 7px;
  border-color: #356abc;
  box-shadow: 0px 0px 10px 3px #356abc;
  color: white;
  padding: 1rem;
  height: 4rem;
  opacity: 80%;

  ${props =>
    props.active &&
    css`
      opacity: 100%;
    `}

  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-direction: column;

  transition: background-color 0.2s;
  &:hover {
    background-color: ${shade(0.2, '#ffcc03')};
    transform: scale(0.98);
  }

  cursor: pointer;
`;
