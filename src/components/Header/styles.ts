import styled from 'styled-components';

export const Container = styled.div`
  a {
    transition: color 0.2s;
    &:hover {
      color: #666;
    }
    display: flex;
    text-decoration: none;
    color: #a8a8b3;
    margin-left: 0;
    svg {
      margin-left: 4px;
    }
  }
`;

const Header = styled.header`
  text-shadow: 0px 0px 12px #356abc;
  -webkit-text-fill-color: #ffcc03;
  -webkit-text-stroke-color: #356abc;
  -webkit-text-stroke-width: 2px;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const HeaderTitle = styled(Header)`
  font: 48px Pokemon, sans-serif;
  min-height: 70px;
`;

export const HeaderSubtitle = styled(Header)`
  font: 24px Pokemon, sans-serif;
`;
