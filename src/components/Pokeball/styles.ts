import styled from 'styled-components';

export const Item = styled.div`
  margin-top: 50px !important;
  max-width: 700px;
  margin: 0 auto;
  display: grid;
  grid-template-rows: repeat(auto-fit, minmax(110px, 1fr));
  grid-template-columns: repeat(auto-fit, minmax(110px, 1fr));

  a {
    transition: transform 0.2s;
    &:hover {
      transform: rotate(15deg);
    }
    margin-top: 10px;
    color: white;
    background: #fff;
    border-radius: 50%;
    width: 100px;
    height: 100px;
    padding: 20px;
    text-decoration: none;
    display: flex;
    justify-content: center;
    align-items: center;

    background: linear-gradient(
      to bottom,
      #ad1515 45%,
      #000000c9 5%,
      #000000c9 50%,
      #d4cbcb 50%
    );
    border-width: 1px;
    border-color: black;
    box-shadow: 0px 0px 10px 3px black;
  }

  strong {
    font-size: 18px;
    -webkit-text-fill-color: #ffcc03;
    -webkit-text-stroke-color: #356abc;
    -webkit-text-stroke-width: 1.2px;
  }
`;
