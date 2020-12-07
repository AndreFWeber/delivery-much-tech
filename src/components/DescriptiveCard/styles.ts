import styled from 'styled-components';

export const Card = styled.div`
  background-color: #ffcc03;
  width: 100%;
  min-height: 75%;
  margin-top: 30px;

  border-style: solid;
  border-radius: 12px;
  border-width: 7px;
  border-color: #356abc;
  box-shadow: 0px 0px 10px 3px #356abc;
  color: white;
  padding: 1rem;
  height: 4rem;
  opacity: 80%;

  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;

  h2 {
    margin-bottom: 10px;
  }
`;
